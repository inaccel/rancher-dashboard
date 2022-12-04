import { md5 } from '@shell/utils/crypto';
import { addParam } from '@shell/utils/url';
import { ucFirst } from '@shell/utils/string';
import NormanModel from '@shell/plugins/steve/norman-class';

export default class Principal extends NormanModel {
  get avatarSrc() {
    if ( this.provider === 'github' ) {
      return addParam(this.profilePicture, 's', 80); // Double the size it will be rendered, for @2x displays
    } else {
      const hash = md5(this.loginName || 'Unknown', 'hex');
      const out = `https://source.boringavatars.com/sunset/80/${ hash }`;

      return out;
    }
  }

  get roundAvatar() {
    return this.provider === 'github';
  }

  get providerSpecificType() {
    const parts = this.id.replace(/:.*$/, '').split('_', 2);

    if ( parts.length === 2 ) {
      return parts[1];
    }

    return null;
  }

  get displayType() {
    const provider = this.$rootGetters['i18n/withFallback'](`model.authConfig.provider."${ this.provider }"`, null, this.provider);

    return `${ provider } ${ ucFirst(this.providerSpecificType) }`;
  }
}
