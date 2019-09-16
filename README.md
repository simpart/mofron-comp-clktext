# mofron-comp-clktext
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

click text component for mofron


# Install
```
npm install mofron mofron-comp-clktext
```

# Sample
```html
<require>
    <tag module="mofron-comp-clktext">Text</tag>
</require>

<script name=clkevt run=init>
console.log("click text");
</script>

<Text clickEvent=@clkevt>click</Text>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| | clickEvent | function | click callback function |
| | | mixed | callback parameter |

