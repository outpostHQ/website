<template>
  <nu-flow fill="#page-bg">
    <nu-props
      main-width="--content-width - 2gp - (2 * --sidebar-width)"
      grid-gap="8x||4x"
      transition="120ms"
    />
    <nu-attrs for="list" position="inside" />
    <nu-attrs for="cd" fill="^root diff :dark[#dark]" shadow=".5" />
    <nu-attrs for="code" size="md" />

    <nu-spacer height="--topbar-offset" />

    <nu-grid
      space="around"
      width="--content-width"
      columns="--sidebar-width 1fr|||1fr"
      gap="1gp"
      height="min 100vh"
    >
      <nu-block
        fill="#page-bg"
        place="static|||fixed top --topbar-offset"
        width="auto|||100%"
        height="auto|||stretch"
        z="no|||10000"
        :show="App.showNav ? 'y' : 'y|||n'"
      >
        <nu-block
          show="n|||y"
          space="around"
          width="--content-width"
          padding="2x 0"
        >
          <SearchBar :section="section" />
        </nu-block>
        <nu-nav
          label="Main"
          display="flex"
          flow="column"
          items="stretch"
          gap="0"
          place="sticky top --topbar-offset"
          overflow="hidden auto"
          height="max (100vh - --topbar-offset)|||max (100vh - --topbar-offset - 9x)"
          padding="4x 1x 4x 0|||0 1cp 4x"
          space="1x left"
        >
          <nu-h2
            show="n|||y"
            size="sm"
            text="up b"
            color="#text.60"
            padding="0 0 1x 1x"
          >
            Pages
          </nu-h2>
          <template v-for="(itemPage, i) in pages">
            <nu-btn
              v-if="!itemPage.hidden || App.isDev"
              :key="i"
              :to="`/${section}${
                itemPage.slug !== 'introduction' ? `/${itemPage.slug}` : ''
              }`"
              :is-current="isCurrentPage(itemPage)"
              padding=".5x 1x"
              color="text :current.hover.focus[special]"
              fill="#clear"
              mark="no :current[y]"
              inset="no"
              border="0"
              content="start"
              :opacity="itemPage.hidden ? '.66' : '1'"
              use-current
            >
              {{ itemPage.menuTitle || itemPage.title }}
            </nu-btn>
          </template>

          <template v-for="sec in sections">
            <nu-h2
              :key="sec.title"
              size="sm"
              text="up b"
              color="#text.60"
              padding="2x 0 0 1x"
            >
              {{ sec.title }}
            </nu-h2>
            <template v-for="(itemPage, i) in sec.pages">
              <nu-btn
                v-if="!itemPage.hidden || App.isDev"
                :key="`${sec.title}${i}`"
                :to="`/${section}/${sec.slug}/${itemPage.slug}`"
                :is-current="isCurrentPage(itemPage)"
                padding=".5x 1x"
                color="text :current.hover.focus[special]"
                fill="#clear"
                mark="no :current[y]"
                inset="no"
                border="0"
                content="start"
                :opacity="itemPage.hidden ? '.66' : '1'"
              >
                {{ itemPage.menuTitle || itemPage.title }}
              </nu-btn>
            </template>
          </template>
        </nu-nav>
      </nu-block>

      <nu-grid
        gap="1gp"
        columns="1pr --sidebar-width|||1pr"
        flow="row"
        content="start stretch"
      >
        <nu-block padding="4x 0 12x" grow="1" order="1|||2">
          <nu-article gap size="lg||||md">
            <nu-attrs for="table" size="md" />
            <nu-attrs for="gridtable" size="md" />
            <template v-if="page.title">
              <nu-flow gap>
                <nu-pane
                  content="space-between"
                  flow="row||||column-reverse"
                  items="start"
                >
                  <nu-h1 size="h1||||h2">
                    {{ formatTitle(page) }}
                  </nu-h1>
                  <nu-btn
                    v-if="page.githubLink"
                    clear
                    border="#special.50"
                    size="md|||sm"
                    padding=".5x 1x"
                    :to="`!${page.githubLink}`"
                  >
                    <nu-icon
                      name="^btn github-outline :hover.focus[external-link-outline]"
                    />
                    Source Code
                  </nu-btn>
                </nu-pane>
                <nu-badge v-if="page.type" special>
                  {{ page.type }}
                </nu-badge>
                <nu-spacer />
                <nu-block
                  v-if="page.description"
                  v-html="page.htmlDescription"
                />
                <nu-spacer />
              </nu-flow>
            </template>

            <TableOfContents show="n|||y" :items="toc" space="1x left" />

            <nu-block>
              <nuxt-content :document="page" />

              <!--              <template v-if="page.type === 'element'">-->
              <!--                <nu-line />-->

              <!--                <nu-h2>Default styles</nu-h2>-->
              <!--              </template>-->
            </nu-block>

            <nu-spacer size="6x" />

            <nu-block>
              <nu-grid
                columns="1pr 1pr|||||1pr"
                flow="row wrap"
                gap="2x|||||1x"
              >
                <nu-attrs for="icon" size="5x" />

                <nu-btn
                  v-if="previousPage"
                  clear
                  border="#special.50"
                  columns="auto 1pr"
                  :to="previousPage.path"
                  padding="1x 2x 1x 1x"
                  order="2"
                >
                  <nu-icon name="chevron-left" />
                  <nu-flow text="right">
                    <nu-block text="ellipsis">{{
                      previousPage.menuTitle
                    }}</nu-block>
                    <nu-block size="sm xs" text="b ellipsis">
                      {{
                        previousPage.sectionTitle
                          ? `${capitalize(previousPage.sectionTitle)} –`
                          : ''
                      }}
                      {{ capitalize(section) }}
                    </nu-block>
                  </nu-flow>
                </nu-btn>

                <nu-btn
                  v-if="nextPage"
                  clear
                  border="#special.50"
                  columns="1pr auto"
                  :to="nextPage.path"
                  padding="1x 1x 1x 2x"
                  order="2|||||1"
                >
                  <nu-flow text="left">
                    <nu-block text="ellipsis">{{
                      nextPage.menuTitle
                    }}</nu-block>
                    <nu-block size="sm xs" text="b ellipsis">
                      {{
                        nextPage.sectionTitle
                          ? `${capitalize(nextPage.sectionTitle)} –`
                          : ''
                      }}
                      {{ capitalize(section) }}
                    </nu-block>
                  </nu-flow>
                  <nu-icon name="chevron-right" />
                </nu-btn>
              </nu-grid>
            </nu-block>
          </nu-article>
        </nu-block>

        <nu-block order="2|||1" show="y|||n">
          <nu-block
            v-if="toc.length >= 2"
            display="flex"
            flow="column"
            items="stretch"
            gap="0"
            place="sticky top --topbar-offset"
            overflow="hidden auto"
            height="max (100vh - --topbar-offset)"
            padding="3x 0|||4x 0 0"
            move="-1x 0"
          >
            <TableOfContents :items="toc" spy />
          </nu-block>
        </nu-block>
      </nu-grid>
    </nu-grid>

    <nu-block border="top" padding="2x 0">
      <nu-block space="around" width="--content-width">
        <nu-pane content="space-between" box="y">
          <InlineSettings />

          <nu-btn clear to="#root">
            <nu-svg
              src="/images/nude-logo-small.svg"
              height="4x"
              width="min 4x"
              color="text-soft"
              opacity="^btn 1 :hover.focus[0]"
              transition="opacity"
            />
            <nu-icon
              name="chevron-up"
              place="inside"
              size="6x"
              opacity="^btn 0 :hover.focus[1]"
              transition="opacity"
            />
          </nu-btn>

          <nu-btn
            to="!https://github.com/numldesign/website"
            padding="1x 2x 1x 1.5x|||1x"
            label="theme"
            radius="round"
          >
            <nu-icon name="github" />
            <nu-el show="y|||n">Website repo</nu-el>
          </nu-btn>
        </nu-pane>
      </nu-block>
    </nu-block>

    <PreviewWindow />
  </nu-flow>
</template>

<script>
import WindowService from '@/services/window';
import SearchBar from '@/components/global/SearchBar';
import Theme from '@/services/theme';
import App from '@/services/app';
import { capitalize } from '@/helpers';
import InlineSettings from '@/components/global/InlineSettings';
import TableOfContents from '@/components/global/TableOfContents';
import PreviewWindow from '@/components/global/PreviewWindow';

export default {
  name: 'MarkdownPage',
  components: { PreviewWindow, TableOfContents, InlineSettings, SearchBar },
  props: {
    section: String,
    pages: Array,
    toc: Array,
    page: Object,
    sections: Array,
  },
  data() {
    return {
      Theme,
      App,
      routePath: '',
    };
  },
  computed: {
    allPages() {
      const pages = [...this.pages];

      this.sections.forEach((section) => {
        pages.push(
          ...(section.pages || [])
            .filter((page) => !page.hidden)
            .map((page) => {
              page.sectionTitle = section.title;

              return { ...page };
            })
        );
      });

      return pages;
    },
    previousPage() {
      const pages = [...this.allPages].reverse();

      return pages.find((pg, i) => {
        const page = pages[i - 1];

        return (
          page && page.path.replace(/\/introduction$/, '') === this.routePath
        );
      });
    },
    nextPage() {
      const pages = [...this.allPages];

      return pages.find((pg, i) => {
        const page = pages[i - 1];

        return (
          page && page.path.replace(/\/introduction$/, '') === this.routePath
        );
      });
    },
  },
  watch: {
    'App.showNav'() {
      setTimeout(() => this.scrollToCurrent());
    },
    '$route.path'() {
      this.updateRoutePath();
    },
  },
  mounted() {
    const hash = location.hash.replace('#', '');

    if (hash) {
      setTimeout(() => {
        WindowService.scrollIntoView(this.nuIdSelector(hash), true);
      }, 100);
    }

    this.scrollToCurrent();
    this.updateRoutePath();
  },
  methods: {
    updateRoutePath() {
      this.routePath = this.$route.path.replace(/\/$/, '');
    },
    nuIdSelector(id) {
      return `[nu-id="${id}"]`;
    },
    scrollToCurrent() {
      const nav = document.querySelector('nu-nav[label="Main"]');
      const currentLink = nav.querySelector(
        `[nu-action][to="${location.pathname}"]`
      );

      if (!currentLink) return;

      if (currentLink.offsetTop > nav.offsetHeight - 100) {
        nav.scrollTop = currentLink.offsetTop - 50;
      }
    },
    formatTitle(page) {
      switch (page.type) {
        case 'definition':
        case 'element':
          return `<${page.title}/>`;
        default:
          return page.title;
      }
    },
    capitalize,
    isCurrentPage(page) {
      let path = page.path;

      if (path.endsWith('/introduction')) {
        path = path.slice(0, -13);
      }

      return path === this.routePath;
    },
  },
  head() {
    return {
      title: `${this.page.title} – ${capitalize(this.section)} – Numl.Design`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    };
  },
};
</script>

<style>
.nuxt-content > *:not(:last-child) {
  margin-bottom: calc(var(--nu-gap) * 2);
}
.nuxt-content-container > textarea {
  color: var(--nu-text-color);
  background-color: var(--nu-bg-color);
  padding: var(--nu-gap) calc(var(--nu-gap) * 2);
  border: var(--nu-border-width) solid var(--nu-border-color);
  border-radius: var(--nu-border-radius);
  font-size: 17px;
  line-height: 27px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
}
</style>
