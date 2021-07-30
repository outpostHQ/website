'use strict';
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const Snippet = require('../db/snippet.js').Snippet;

function ok(res, payload) {
  res.json({
    ok: true,
    payload,
  });
}

function fail(res, payload = 'internal_error') {
  res.json({
    ok: false,
    payload,
  });
}

app.options('/api');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API is ready');
});

router.get(
  '/api/snippets/:id',
  cors({
    origin: 'https://numl.design',
  }),
  async (req, res) => {
    const id = req.params.id;

    let snippet;

    try {
      snippet = await Snippet.findOne({ _id: id });
    } catch (e) {
      return fail(res);
    }

    if (snippet) {
      const { code } = snippet;

      ok(res, { code });
    } else {
      fail(res, 'Not found');
    }
  }
);

router.post(
  '/api/snippets',
  cors({
    origin: 'https://numl.design',
  }),
  async (req, res) => {
    let code = req.body.code;

    if (!code || !code.trim()) {
      return fail('No code provided');
    }

    code = code.trim();

    const existSnippet = await Snippet.findOne({ code });

    if (existSnippet) {
      return ok(res, { id: existSnippet._id });
    }

    const snippet = new Snippet({ code });

    await snippet.save();

    ok(res, { id: snippet.id });
  }
);

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
