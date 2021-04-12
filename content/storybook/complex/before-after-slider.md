```html
<split/>
<nu-card padding="0" overflow="no" selectable="no">
  <nu-img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/after.jpg" width="100%"></nu-img>
  <nu-img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/before.jpg"
          id="overlay"
          place="cover"
          width="100%"
          height="100%"
          fit="cover left"
          border="2bw right color(special)"></nu-img>
  <nu-block
             use-slider
             cursor="pointer"
             control="overlay[width:%] cap[@percent:%]"
             value="50"
             place="cover"
             height="100%"
             fill="clear"
             border="0"
             mark="n"></nu-block>
  <nu-circle id="cap"
             fill="special-bg"
             color="special-text"
             size="2"
             place="left top 50% --percent"
             move="(-50% + 1bw) (-50% + 1bw)"
             interactive="no">
    <nu-icon
             name="chevron-left"
             place="left"
             move="-.5x"></nu-icon>
    <nu-icon
             name="chevron-right"
             place="right"
             move=".5x"></nu-icon>
  </nu-circle>
</nu-card>
```
