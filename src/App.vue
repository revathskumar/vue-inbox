<template id="app">
  <div>
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Vue Mail</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <router-link to="/inbox" class="mdl-navigation__link">
            <span class="mdl-badge" data-badge="4">Inbox</span>
          </router-link>
          <router-link to="/draft" class="mdl-navigation__link"> Drafts </router-link>
          <router-link to="/sent" class="mdl-navigation__link"> Sent Items </router-link>
          <router-link to="/all" class="mdl-navigation__link"> All Mails </router-link>
        </nav>
      </div>
      </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Vue Mail</span>
      <nav class="mdl-navigation">
        <router-link to="/inbox" class="mdl-navigation__link">
          <span class="mdl-badge" data-badge="4">Inbox</span>
        </router-link>
        <router-link to="/draft" class="mdl-navigation__link"> Drafts </router-link>
        <router-link to="/sent" class="mdl-navigation__link"> Sent Items </router-link>
        <router-link to="/all" class="mdl-navigation__link"> All Mails </router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <router-view></router-view>
    </main>
  </div>
</template>
