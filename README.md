# getSafe() - Alternative function for Lodash get() or result()

If you need function like Lodash _.get or _.result, but only need both. You can create the replacement. It is only **205 bytes**. 

Here the code:
```javascript
function getSafe(path_value) {
  try {
    if (typeof path_value !== "function") {
      throw new Error();
    }

    return path_value();
  } catch {
    return undefined;
  }
}

export default getSafe;

```

##### Example:
```javascript
import getSafe from "./getSafe";

const my_object = {
  propA: 'propA',
  propB: {
    propB1: 'propB1'
  }
};

const b_x_value = getSafe(() => my_object.propB.propB1);
// will return "propB1"

const b_x_value = getSafe(() => my_object.propBAA.propB1);
// will return undefined

```

