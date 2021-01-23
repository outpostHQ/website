<template>
  <nu-block>
    <nu-theme hue="272" saturation="70" />
    <nu-props h1-font-size="2.5rem|||2rem" h1-line-height="3rem|||2.5rem" />
    <nu-attrs for="description" opacity=".8" />
    <nu-attrs for="grid" items="start stretch" gap="1gp" />

    <nu-block theme="special" :image="gradient">
      <Topbar />
      <SiteBlock
        badge="design system · framework · language"
        heading="Universal UI Language\nfor\s modern web\s interfaces"
        description="An open-source Library of Web&nbsp;Components and a&nbsp;Runtime&nbsp;CSS&nbsp;Framework for rapidly building UI that follows your&nbsp;Design&nbsp;System."
        padding="10x 0||8x 0|4x 0 8x"
        level="1"
        fill="clear"
        special
        border="n"
      >
        <nu-pane size="xl">
          <nu-btn special to="#getting-started">
            <nu-icon name="^ book-outline :hover.focus[book-open-outline]" />
            Get started
          </nu-btn>
        </nu-pane>
        <nu-grid
          size="md"
          gap="1x 1gp"
          flow="column||row"
          columns="||1pr 1pr"
          items="center"
        >
          <nu-attrs for="btn" padding=".25em .5em"></nu-attrs>
          <nu-btn clear to="!https://www.npmjs.com/package/numl">
            <nu-icon name="cube"></nu-icon>
            {{ App.version }}
          </nu-btn>
          <nu-btn clear to="!https://github.com/numldesign/numl">
            <nu-icon name="github"></nu-icon>
            Github
            <nu-icon name="star"></nu-icon>
            {{ githubStars }}
          </nu-btn>
          <nu-btn clear to="!https://discord.gg/sHnHPnAPZj">
            <nu-icon name="message-circle-outline"></nu-icon>
            Discord
          </nu-btn>
          <nu-btn clear to="!https://twitter.com/numldesign">
            <nu-icon name="twitter"></nu-icon>
            Twitter
          </nu-btn>
        </nu-grid>
      </SiteBlock>
    </nu-block>

    <RuntimeTheming />

    <SiteBlock
      badge="flexible and comprehensive"
      heading="Style language"
      description="Take all the CSS in your app under control without fighting preprocessors&nbsp;and specifications"
      fill="subtle"
    >
      <nu-grid
        columns="1pr 1pr 1pr||1fr"
        space="around"
        width="@content-width"
        gap="2gp 1gp"
      >
        <nu-attrs for="heading" />
        <nu-attrs
          for="description"
          height="min 7||auto"
          padding="1.5x"
          opacity="^ 1 :hover.focus[.5]"
        />
        <nu-attrs
          for="feature"
          gap="1gp"
          display="grid"
          flow="row"
          columns="1pr||1pr 1pr|1pr"
          items="start stretch"
        />
        <nu-attrs
          for="h3"
          size="h4"
          display="flex"
          gap="1x"
          content="center"
          items="center"
          text="center"
          fill="#special-bg"
          radius="1x 1x 0 0"
          padding="1x 0"
          width="100%"
        />
        <nu-attrs
          for="learn-more"
          t="'Learn more'"
          place="inside"
          opacity="^ 0 :hover.focus[1]"
          interactive="no"
          border="0"
          size="xl"
          move="^ 0 6x :hover.focus[0 3x]"
          z="above"
          shadow="#special-shadow.33"
          transition="opacity, move"
          fill="#special-bg"
        />
        <nu-attrs for="card" padding="0" fill="bg" />
        <nu-attrs
          for="cardbtn"
          padding="0"
          fill="bg"
          color="text :hover.focus[special]"
        />
        <nu-region as="feature">
          <nu-cardbtn clear to="!/storybook/typography/base-formatting">
            <nu-props
              special-color="hue(170 special pastel)"
              special-bg-color="hue(170 special pastel)"
            />
            <nu-badge as="learn-more" />
            <nu-h3>
              <nu-icon name="code" />
              Intuitive syntax
            </nu-h3>
            <nu-description>
              Feels like
              <nu-strong>you already now it</nu-strong>
              . It's like CSS but with handy&nbsp;shorthands and
              custom&nbsp;units.
            </nu-description>
          </nu-cardbtn>

          <nu-flow gap>
            <Snippet :code="syntaxSnippet" />
            <nu-spacer />
            <nu-h6>
              <nu-icon name="eye-outline" />
              Preview
            </nu-h6>
            <nu-flex
              radius="2r"
              padding="2x"
              shadow
              gap
              content="space-between"
            >
              <nu-block>It's sunny today.</nu-block>
              <nu-icon name="sun"></nu-icon>
            </nu-flex>
          </nu-flow>
        </nu-region>

        <nu-region as="feature">
          <nu-cardbtn clear to="!/reference/utilities/responsive">
            <nu-props
              special-color="hue(250 special pastel)"
              special-bg-color="hue(250 special pastel)"
            />
            <nu-badge as="learn-more" />
            <nu-h3>
              <nu-icon name="grid-outline" />
              Responsive helper
            </nu-h3>
            <nu-description>
              Utility attribute to declare
              <nu-strong>responsive breakpoints</nu-strong>
              and a&nbsp;simple syntax to bind style to specific
              screen&nbsp;width&nbsp;interval.
            </nu-description>
          </nu-cardbtn>

          <nu-flow gap>
            <Snippet :code="responsiveSnippet" />

            <nu-spacer />

            <nu-flex gap="3x" space="around" content="center">
              <nu-attrs
                for="block"
                radius=".5r"
                border
                height="1"
                width="1"
                fill="dark"
              />
              <nu-attrs for="grid" gap />
              <nu-flow gap>
                <nu-attrs for="block" fill="hue(15 50)" />
                <nu-h6>Desktop</nu-h6>
                <nu-grid columns="repeat(4, 1fr)">
                  <nu-block></nu-block>
                  <nu-block></nu-block>
                  <nu-block></nu-block>
                  <nu-block></nu-block>
                </nu-grid>
              </nu-flow>

              <nu-flow gap>
                <nu-attrs for="block" fill="hue(220 50)" />
                <nu-h6>Tablet</nu-h6>
                <nu-grid columns="1fr 1fr">
                  <nu-block></nu-block>
                  <nu-block></nu-block>
                  <nu-block></nu-block>
                  <nu-block></nu-block>
                </nu-grid>
              </nu-flow>

              <nu-flow gap>
                <nu-attrs for="block" fill="hue(310 50)" />
                <nu-h6>Mobile</nu-h6>
                <nu-grid columns="1fr">
                  <nu-block></nu-block>
                  <nu-block></nu-block>
                  <nu-block></nu-block>
                  <nu-block></nu-block>
                </nu-grid>
              </nu-flow>
            </nu-flex>
          </nu-flow>
        </nu-region>

        <nu-region as="feature">
          <nu-cardbtn clear to="!/storybook/dynamic-props/states">
            <nu-props
              special-color="hue(290 special pastel)"
              special-bg-color="hue(290 special pastel)"
            />
            <nu-badge as="learn-more" />
            <nu-h3>
              <nu-icon name="loader-outline" />
              State binding
            </nu-h3>
            <nu-description>
              Bind style to specific element state like
              <nu-strong>focus</nu-strong>
              or
              <nu-strong>hover</nu-strong>
              . Numl will take care of all possible combinations.
            </nu-description>
          </nu-cardbtn>

          <nu-flow gap>
            <Snippet :code="stateSnippet" />
            <nu-spacer />
            <nu-h6>
              <nu-icon name="eye-outline" />
              Preview
            </nu-h6>
            <nu-btn fill="bg :focus[special-bg]">
              Focus on me
            </nu-btn>
          </nu-flow>
        </nu-region>
      </nu-grid>
    </SiteBlock>

    <SiteBlock
      heading="Why Numl?"
      description="Another UI Framework? Why should anyone care?"
    >
      <nu-grid
        columns="1pr 1pr|||1fr"
        width="10sp||@content-width"
        text="left"
        items="stretch"
      >
        <nu-attrs for="card" padding="3x 4x|||2x" radius="3r" />

        <nu-card gap clear fill="bg" color="hue(15 pastel)">
          <nu-pane content="space-between" size="h3">
            <nu-h3>
              All-in-one
            </nu-h3>
            <nu-icon name="layers-outline" />
          </nu-pane>
          <nu-description>
            Numl is both a markup language for rapidly building responsive
            interfaces and a set of ready-to-use highly-customizable accessible
            elements. So you can use a single comprehensive tool to compose and
            style web applications. It's also possible to create simple
            interactions without writing JS.
          </nu-description>
        </nu-card>

        <nu-card gap clear fill="bg" color="hue(170 pastel)">
          <nu-pane content="space-between" size="h3">
            <nu-h3>
              Universal
            </nu-h3>
            <nu-icon name="flash-outline" />
          </nu-pane>
          <nu-description>
            Numl is built on top of Web Components, a modern web API to create
            reusable UI elements, and it's compatible with most modern
            JS-frameworks. You can use it as is or create lightweight wrappers
            for your favorite framework to improve DX, SSR and SEO.
          </nu-description>
        </nu-card>

        <nu-card gap clear fill="bg" color="hue(250 pastel)">
          <nu-pane content="space-between" size="h3">
            <nu-h3>
              Unique
            </nu-h3>
            <nu-icon name="bulb-outline" />
          </nu-pane>
          <nu-description>
            Numl is based on unique CSS generation technology that allows you to
            unleash all the power of modern CSS and take all styles under your
            control.
          </nu-description>
        </nu-card>

        <nu-card gap clear fill="bg" color="hue(290 pastel)">
          <nu-pane content="space-between" size="h3">
            <nu-h3>
              DX Focused
            </nu-h3>
            <nu-icon name="code-outline" />
          </nu-pane>
          <nu-description>
            Numl is focused on providing the best possible Developer Experience.
            It has lots of built-in helpers and solutions for routine UI
            development and its atomic approach is convenient for customization,
            maintaining, and refactoring.
          </nu-description>
        </nu-card>
      </nu-grid>

      <!--      <nu-btn special size="xl" padding="1x 4x">-->
      <!--        <nu-icon name="^ book :hover.focus[book-open]" />-->
      <!--        Get started-->
      <!--      </nu-btn>-->
    </SiteBlock>

    <SiteBlock
      id="getting-started"
      heading="Get started with Numl"
      description="Add the following code to your page"
      fill="subtle"
    >
      <Snippet v-if="App.version" :code="startSnippet" />
      <nu-flex width="max @content-width" gap="2x" flow="column" items="center">
        <nu-block>
          That's all! Now you can use all elements
          and&nbsp;features&nbsp;of&nbsp;Numl!
        </nu-block>
        <nu-block>Try to add a simple element:</nu-block>
        <Snippet :code="`<nu-btn>My button</nu-btn>`" />
        <nu-block>
          See our
          <nu-link to="/handbook/getting-started">Handbook</nu-link>
          for more details and other&nbsp;ways to&nbsp;install&nbsp;Numl.
        </nu-block>
      </nu-flex>
    </SiteBlock>

    <SiteBlock
      heading="Join the community"
      description="Your contribution and feedback will help us to constantly bring new&nbsp;awesome&nbsp;updates"
    >
      <nu-pane
        gap="1x"
        flow="row wrap"
        columns="||1pr 1pr"
        items="center"
        content="center"
        size="lg"
      >
        <nu-attrs
          for="btn"
          clear
          padding="1x 2x"
          color="special"
          shadow="no :hover[#shadow.33]"
        />
        <nu-btn to="!https://github.com/numldesign/numl">
          <nu-icon name="github-outline"></nu-icon>
          Github
        </nu-btn>
        <nu-btn to="!https://discord.gg/sHnHPnAPZj">
          <nu-icon name="message-circle-outline"></nu-icon>
          Discord
        </nu-btn>
        <nu-btn to="!https://twitter.com/numldesign">
          <nu-icon name="twitter-outline"></nu-icon>
          Twitter
        </nu-btn>
        <nu-btn to="!mailto:inbox@numl.design">
          <nu-icon name="email-outline"></nu-icon>
          eMail
        </nu-btn>
        <nu-btn to="!https://www.patreon.com/tenphi">
          <nu-icon name="heart-outline"></nu-icon>
          Sponsor
        </nu-btn>
      </nu-pane>
    </SiteBlock>

    <SiteBlock
      fill="dark"
      color="white"
      padding="5x 0 12x 0||5x 0 8x 0"
      items="start stretch"
      width="@content-width"
    >
      <nu-attrs for="link" color="white" />
      <nu-footer width="100%">
        <nu-pane content="space-between" gap="1gp" flow="row|||column">
          <nu-nav gap="3x">
            <nu-link to="/storybook">Storybook</nu-link>
            <nu-link to="/handbook">Handbook</nu-link>
            <!--            <nu-link to="/repl">REPL</nu-link>-->
            <nu-link to="/reference">API Reference</nu-link>
            <nu-link to="/blog">Blog</nu-link>
          </nu-nav>
          <nu-flow gap color="white" text="right|||center">
            <nu-block>
              Created with <nu-icon name="heart" /> by
              <nu-link to="!https://tenphi.me">@tenphi</nu-link> using
              <nu-strong>Numl</nu-strong>
            </nu-block>
            <nu-block>
              Numl Open Source by
              <nu-link to="!https://forneu.in">Forneu</nu-link>
            </nu-block>
          </nu-flow>
        </nu-pane>
      </nu-footer>
    </SiteBlock>
  </nu-block>
</template>

<script>
import RuntimeTheming from '@/components/landing/RuntimeTheming';
import SiteBlock from '@/components/global/SiteBlock';
import Snippet from '@/components/global/Snippet';
import Github from '@/helpers/github';
import App from '@/services/app';

export default {
  components: { Snippet, SiteBlock, RuntimeTheming },
  data() {
    const dev = process.client && location.hostname === 'localhost';

    return {
      App,
      githubStars: '...',
      nudeElementsLabel: `<nu-el color="text">nu</nu-el>de e<nu-el color="text">l</nu-el>e<nu-el color="text">m</nu-el>ents`,
      dev,
      syntaxSnippet: `
<nu-flex
  radius="2r" padding="2x"
  shadow gap content="space-between">
  <nu-block>It's sunny today.</nu-block>
  <nu-icon name="sun"></nu-icon>
</nu-flex>`,
      responsiveSnippet: `
<nu-block responsive="60rem|40rem">
  <nu-grid
    columns="repeat(4, 1fr)|1fr 1fr|1fr">
    ...
  </nu-grid>
</nu-block>`,
      stateSnippet: `
<nu-btn
  fill="bg :focus[special-bg]">
  Focus on me
</nu-btn>`,
    };
  },
  computed: {
    startSnippet() {
      return `
<script src="https://cdnjs.cloudflare.com/ajax/libs/numl/@${App.version}/index.js" type="module" />`;
    },
    gradient() {
      const hue = (mod) => {
        return (272 + 360 + mod) % 360;
      };
      const saturation = 70;

      return `linear(-20deg, hue(${hue(-15)} ${saturation} special), hue(${hue(
        15
      )} ${saturation} special))||linear(-40deg, hue(${hue(
        -10
      )} ${saturation} special), hue(${hue(10)} ${saturation} special))`;
    },
  },
  mounted() {
    Github.getStars('numldesign/numl').then(
      (stars) => (this.githubStars = stars)
    );
  },
};
</script>
