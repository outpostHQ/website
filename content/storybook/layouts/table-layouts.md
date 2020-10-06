Table layouts are for cases when you need a semantically correct table, with row groups, rows, and headers. Don't use it for other cases.

## Simple table

```html
<split/>
<#[[nu-table]]# text="b center">
  <nu-attrs for="cell" width="min 7" height="4" size="l"></nu-attrs>
  <nu-row>
    <nu-cell>A</nu-cell>
    <nu-cell>B</nu-cell>
  </nu-row>
  <nu-row>
    <nu-cell>C</nu-cell>
    <nu-cell>D</nu-cell>
  </nu-row>
</nu-table>
```

## Table with column headers

```html
<split/>
<#[[nu-table]]# text="b center">
  <nu-attrs for="cell" width="min 7" height="4" size="l"></nu-attrs>
  <nu-attrs for="columnheader" text="h"></nu-attrs>
  <nu-rowgroup>
    <nu-row>
      <nu-columnheader>
       Header 1
      </nu-columnheader>
      <nu-columnheader>
       Header 2
      </nu-columnheader>
    </nu-row>
  </nu-rowgroup>
  <nu-rowgroup>
    <nu-row>
      <nu-cell>A</nu-cell>
      <nu-cell>B</nu-cell>
    </nu-row>
    <nu-row>
      <nu-cell>C</nu-cell>
      <nu-cell>D</nu-cell>
    </nu-row>
  </nu-rowgroup>
</nu-table>
```

## Table with row headers

```html
<split/>
<#[[nu-table]]# text="b center">
  <nu-attrs for="cell" width="min 7" height="4" size="l"></nu-attrs>
  <nu-attrs for="rowheader" text="h"></nu-attrs>
  <nu-row>
    <nu-rowheader>
      Header 1
    </nu-rowheader>
    <nu-cell>A</nu-cell>
    <nu-cell>B</nu-cell>
  </nu-row>
  <nu-row>
    <nu-rowheader>
      Header 2
    </nu-rowheader>
    <nu-cell>C</nu-cell>
    <nu-cell>D</nu-cell>
  </nu-row>
  <nu-row>
    <nu-rowheader>
      Header 3
    </nu-rowheader>
    <nu-cell>E</nu-cell>
    <nu-cell>F</nu-cell>
  </nu-row>
</nu-table>
```
