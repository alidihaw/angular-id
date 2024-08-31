/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {h} from 'preact';
import {TypeAliasEntryRenderable} from '../entities/renderables';
import {HeaderApi} from './header-api';
import {TabDescription} from './tab-description';
import {TabUsageNotes} from './tab-usage-notes';
import {TabApi} from './tab-api';

/** Component to render a type alias API reference document. */
export function TypeAliasReference(entry: TypeAliasEntryRenderable) {
  return (
    <div class="api">
      <HeaderApi entry={entry} />
      <TabApi entry={entry} />
      <TabDescription entry={entry} />
      <TabUsageNotes entry={entry} />
    </div>
  );
}
