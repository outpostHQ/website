Use this style to change element Z index.

## Syntax

```
auto | <integer> | inherit | above | below | front | back
```

## Modifiers

|Modifier|Description|
|----|----|
|`"above"`|Place element above. (`z-index: 1`)|
|`"below"`|Place element below.  (`z-index: -1`)|
|`"front"`|Place element to the front of other elements including those with **above** modifier.  (`z-index: 10`)|
|`"back"`|Place element to the back of other elements including those with **below** modifier. (`z-index: -10`)|

## Examples

```preview
<nu-flex items="center">
    <nu-card theme="red swap" z="above" move="50% 0" height="3">
        [z="above"]
    </nu-card>

    <nu-card theme="blue swap">
        No [z] attribute
    </nu-card>
</nu-flex>
```

## See also

* [Learn Z-Index Using a Visualization Tool](!https://thirumanikandan.com/posts/learn-z-index-using-a-visualization-tool)

## CSS References

* [MDN: z-index](!https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
