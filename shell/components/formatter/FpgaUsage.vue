<script>
export default {
  name:  'FpgaUsage',
  props: {
    row: {
      type:     Object,
      required: true
    },
  },
  data() {
    return {
      loading:   true,
      fpgaUsage: null
    };
  },
  methods: {
    intelPacA10Used(pods) {
      return pods.filter(pod => pod.status.phase !== 'Succeeded' && pod.status.phase !== 'Failed').map((pod) => {
        let limit = 0;

        pod.spec.containers?.forEach((container) => {
          const quantity = Number.parseInt(container.resources?.limits?.['intel/pac_a10'] || '0');

          limit += quantity;
        });
        pod.spec.initContainers?.forEach((container) => {
          const quantity = Number.parseInt(container.resources?.limits?.['intel/pac_a10'] || '0');

          if (quantity > limit) {
            limit = quantity;
          }
        });

        return limit;
      }).reduce((nodeUsage, limit) => nodeUsage + limit, 0);
    },
    intelPacA10Allocatable(nodes) {
      return nodes.map(node => Number.parseInt(node.status.capacity['intel/pac_a10'] || '0')).reduce((capacity, nodeCapacity) => capacity + nodeCapacity, 0);
    },
    intelPacS10Used(pods) {
      return pods.filter(pod => pod.status.phase !== 'Succeeded' && pod.status.phase !== 'Failed').map((pod) => {
        let limit = 0;

        pod.spec.containers?.forEach((container) => {
          const quantity = Number.parseInt(container.resources?.limits?.['intel/pac_s10'] || '0');

          limit += quantity;
        });
        pod.spec.initContainers?.forEach((container) => {
          const quantity = Number.parseInt(container.resources?.limits?.['intel/pac_s10'] || '0');

          if (quantity > limit) {
            limit = quantity;
          }
        });

        return limit;
      }).reduce((nodeUsage, limit) => nodeUsage + limit, 0);
    },
    intelPacS10Allocatable(nodes) {
      return nodes.map(node => Number.parseInt(node.status.capacity['intel/pac_s10'] || '0')).reduce((capacity, nodeCapacity) => capacity + nodeCapacity, 0);
    },
    intelPacS10UsmUsed(pods) {
      return pods.filter(pod => pod.status.phase !== 'Succeeded' && pod.status.phase !== 'Failed').map((pod) => {
        let limit = 0;

        pod.spec.containers?.forEach((container) => {
          const quantity = Number.parseInt(container.resources?.limits?.['intel/pac_s10_usm'] || '0');

          limit += quantity;
        });
        pod.spec.initContainers?.forEach((container) => {
          const quantity = Number.parseInt(container.resources?.limits?.['intel/pac_s10_usm'] || '0');

          if (quantity > limit) {
            limit = quantity;
          }
        });

        return limit;
      }).reduce((nodeUsage, limit) => nodeUsage + limit, 0);
    },
    intelPacS10UsmAllocatable(nodes) {
      return nodes.map(node => Number.parseInt(node.status.capacity['intel/pac_s10_usm'] || '0')).reduce((capacity, nodeCapacity) => capacity + nodeCapacity, 0);
    },
    fpgaUsed(pods) {
      return this.intelPacA10Used(pods) + this.intelPacS10Used(pods) + this.intelPacS10UsmUsed(pods);
    },
    fpgaAllocatable(nodes) {
      return this.intelPacA10Allocatable(nodes) + this.intelPacS10Allocatable(nodes) + this.intelPacS10UsmAllocatable(nodes);
    },

    async startDelayedLoading() {
      const id = this.row?.mgmt?.id;

      if (this.row?.isReady && id) {
        const nodes = await this.$store.dispatch('management/request', { url: `/k8s/clusters/${ id }/v1/nodes` });
        const pods = await this.$store.dispatch('management/request', { url: `/k8s/clusters/${ id }/v1/pods` });

        this.loading = false;
        const usedFpgas = this.fpgaUsed(pods.data);
        const totalFpgas = this.fpgaAllocatable(nodes.data);

        if (totalFpgas) {
          this.fpgaUsage = `${ usedFpgas }/${ totalFpgas }`;
        } else {
          this.fpgaUsage = '—';
        }
      } else {
        this.loading = false;
        this.fpgaUsage = '—';
      }
    }
  },
};
</script>

<template>
  <i
    v-if="loading"
    class="icon icon-spinner icon-spin"
  />
  <p v-else>
    {{ fpgaUsage }}
  </p>
</template>

<style lang="scss" scoped>

</style>
