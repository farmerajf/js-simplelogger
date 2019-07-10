# js-simplelogger
A simple JS logger I write for some work projects. Nothing exciting.

Usage

```javascript
import Logger from "./logger"
Logger.SetMinimumSeverity(1);
Logger.Log(1, "Error");

//Output: Error
```

```javascript
import Logger from "./logger"
Logger.SetMinimumSeverity(2);
Logger.Log(1, "Error");

//Output: (nothing)
```
