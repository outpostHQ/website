import { SECTION_MAP } from '@/helpers/config';
import { preparePage } from '@/helpers/prepare-page';

export default function (prefix) {
  const siteSection = prefix.split('/')[0];
  const innerSection = prefix.split('/')[1];
  const sectionList = SECTION_MAP[siteSection] || [];

  return {
    data() {
      return {
        section: siteSection,
      };
    },
    async asyncData({ $content, params }) {
      const page = preparePage(
        await $content(prefix, params.slug || 'introduction').fetch(),
        innerSection
      );

      const pages = (await $content(siteSection).fetch())
        .sort((p1, p2) => {
          return (p1.menuIndex || 0) - (p2.menuIndex || 0);
        })
        .map(preparePage);

      const sections = (
        await Promise.all(
          sectionList.map(async (sectionObj) => {
            const sectionSlug = sectionObj.slug;
            const sectionPages = (
              await $content(`${siteSection}/${sectionSlug}`).fetch()
            )
              .map((page) => {
                page.section = sectionSlug;

                return page;
              })
              .sort((p1, p2) => {
                return !p1.menuIndex && !p2.menuIndex
                  ? (p1.menuTitle || p1.title || p1.slug).localeCompare(
                      p2.menuTitle || p2.title || p2.slug
                    )
                  : (p1.menuIndex || 0) - (p2.menuIndex || 0);
              });

            sectionObj.pages = sectionPages.map((page) =>
              preparePage(page, sectionSlug)
            );
            sectionObj.size = sectionObj.pages.filter(
              (page) => !page.hidden
            ).length;

            if (!sectionObj.title) {
              sectionObj.title = sectionSlug;
            }

            return sectionObj;
          })
        )
      ).filter((section) => section.pages.length);

      return { page, pages, sections };
    },
  };
}
