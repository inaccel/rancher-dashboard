<script>
import { Banner } from '@components/Banner';

import Questions from '@shell/components/Questions';
import YamlEditor from '@shell/components/YamlEditor';
import { labelForAddon } from '@shell/utils/cluster';
import { _EDIT } from '@shell/config/query-params';

export default {
  components: {
    Banner,
    Questions,
    YamlEditor
  },

  props: {
    mode: {
      type:     String,
      required: true,
    },

    value: {
      type:     Object,
      required: true,
    },

    versionInfo: {
      type:     Object,
      required: true,
    },

    addonVersion: {
      type:     Object,
      required: false,
      default:  null
    },

    addonsRev: {
      type:     Number,
      required: true,
    },
    userChartValuesTemp: {
      type:     Object,
      required: true,
    },
    initYamlEditor: {
      type:     Function,
      required: true,
    }

  },

  data() {
    return { labelForAddon };
  },

  computed: {
    isEdit() {
      return this.mode === _EDIT;
    },
  }
};
</script>

<template>
  <div>
    <Banner
      v-if="isEdit"
      color="warning"
    >
      {{ t('cluster.addOns.dependencyBanner') }}
    </Banner>
    <div
      v-if="versionInfo && addonVersion"
      :key="addonsRev"
    >
      <h3>{{ labelForAddon(addonVersion.name) }}</h3>
      <Questions
        v-if="versionInfo[addonVersion.name] && versionInfo[addonVersion.name].questions && addonVersion.name && userChartValuesTemp[addonVersion.name]"
        v-model="userChartValuesTemp[addonVersion.name]"
        :emit="true"
        in-store="management"
        :mode="mode"
        :tabbed="false"
        :source="versionInfo[addonVersion.name]"
        :target-namespace="value.metadata.namespace"
        @updated="$emit('update-questions', addonVersion.name)"
      />
      <YamlEditor
        v-else
        ref="yaml-values"
        :value="initYamlEditor(addonVersion.name)"
        :scrolling="true"
        :as-object="true"
        :editor-mode="mode === 'view' ? 'VIEW_CODE' : 'EDIT_CODE'"
        :hide-preview-buttons="true"
        @input="data => $emit('update-values', addonVersion.name, data)"
      />
      <div class="spacer" />
    </div>
  </div>
</template>
