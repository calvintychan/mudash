import _ from 'lodash';
import _imArgs from './_imArgs';
import _muArgs from './_muArgs';
import { isImmutable } from '../core';
import * as ims from '../im';
import * as mus from '../mu';

const lodash = _.runInContext();
const _mus = lodash.mixin(mus);

export default function _hint(funcName, convert = false) {
  let im = ims[funcName];
  let mu = _mus[funcName];
  if (convert) {
    im = _imArgs(im);
    mu = _muArgs(mu);
  }
  return (data, ...args) => {
    return isImmutable(data) ? im(data, ...args) : mu(data, ...args);
  };
}
