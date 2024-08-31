import {parseMarkdown} from '../../../guides/parse';
import {runfiles} from '@bazel/runfiles';
import {readFile} from 'fs/promises';
import {JSDOM} from 'jsdom';

describe('markdown to html', () => {
  let markdownDocument: DocumentFragment;

  beforeAll(async () => {
    const markdownContent = await readFile(
      runfiles.resolvePackageRelative('docs-workflow/docs-workflow.md'),
      {encoding: 'utf-8'},
    );
    markdownDocument = JSDOM.fragment(await parseMarkdown(markdownContent, {}));
  });

  it('create an ordered list container around the docs-steps', () => {
    const docsWorkflowEl = markdownDocument.querySelector('.docs-steps')!;
    expect(docsWorkflowEl.tagName).toBe('OL');
    expect(docsWorkflowEl.children.length).toBe(2);
  });
});
