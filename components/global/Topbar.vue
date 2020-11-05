<template>
  <nu-header
    width="--content-width"
    space="around"
    padding="4x 1cp||2x 1cp"
    fill="clear"
  >
    <nu-pane content="space-between" size="md" flow="row|||column" gap="2x 1x">
      <nu-pane text="nowrap">
        <nu-svg src="/images/nude-logo-small.svg" height="5x" width="5x" />
        <nu-h2 size="h4"> Numl<nu-el opacity=".7">.Design</nu-el> </nu-h2>
      </nu-pane>
      <nu-pane size="lg" gap="0|||1x">
        <nu-attrs for="btn" padding="1x 2x|||1x" />
        <nu-attrs for="icon" show="y||||n" />
        <nu-btn clear to="/handbook">
          <nu-icon name="book" />
          Handbook
        </nu-btn>
        <nu-btn clear to="/storybook">
          <nu-icon name="layout" />
          Storybook
        </nu-btn>
        <nu-btn clear to="!https://github.com/numldesign/numl">
          <nu-icon name="github" />
          Github
        </nu-btn>
      </nu-pane>
      <!--      <nu-block>-->
      <!--        <nu-inputgroup radius="round">-->
      <!--          <nu-icon name="search-outline"></nu-icon>-->
      <!--          <nu-search />-->
      <!--        </nu-inputgroup>-->
      <!--      </nu-block>-->
    </nu-pane>
  </nu-header>
</template>
