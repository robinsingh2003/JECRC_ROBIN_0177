# Browser Performance Monitoring - Code Captions

## Overview
This HTML file demonstrates three essential browser performance monitoring techniques in JavaScript.

---

## 1. Memory Usage Check (`checkMemory()` function)

```
javascript
function checkMemory() {
    if (performance.memory) {
        console.log('Memory usage:', performance.memory);
    } else {
        console.warn('performance.memory is not supported in this browser.');
    }
}
```

**Caption:** 
- This function uses the `performance.memory` API (Chrome-specific) to retrieve memory usage information
- It checks if the API is available before accessing memory properties
- Returns JS heap size details including `usedJSHeapSize`, `totalJSHeapSize`, and `jsHeapSizeLimit`
- Useful for monitoring application memory consumption in real-time

---

## 2. Performance Marks & Measures (`measureTask()` function)

```
javascript
function measureTask() {
    performance.mark('startTask');

    // Simulated heavy task
    for (let i = 0; i < 10000000; i++) {}

    performance.mark('endTask');
    performance.measure('taskDuration', 'startTask', 'endTask');

    const measures = performance.getEntriesByType('measure');
    console.log('Task duration:', measures);
}
```

**Caption:**
- Uses Performance Timing API to measure execution time of code blocks
- `performance.mark()` creates timestamp markers to mark the start and end of a task
- `performance.measure()` calculates the duration between two marks
- `performance.getEntriesByType('measure')` retrieves all performance measurements
- This is useful for profiling specific operations and identifying performance bottlenecks

---

## 3. Frame Rate Monitoring (FPS - `checkFrameRate()` and `startFPS()` functions)

```
javascript
let frameCount = 0;
let lastTime = performance.now();
let isRunning = false;

function checkFrameRate() {
    if (!isRunning) return;

    frameCount++;
    const now = performance.now();
    const delta = now - lastTime;

    if (delta >= 1000) {
        const fps = frameCount / (delta / 1000);
        console.log(`FPS: ${fps.toFixed(2)}`);
        frameCount = 0;
        lastTime = now;
    }

    requestAnimationFrame(checkFrameRate);
}

function startFPS() {
    if (!isRunning) {
        isRunning = true;
        console.log("FPS Monitoring Started...");
        requestAnimationFrame(checkFrameRate);
    }
}
```

**Caption:**
- Monitors the frame rate (FPS) of the browser's rendering performance
- Uses `performance.now()` for high-precision time measurements
- `requestAnimationFrame()` ensures the check runs in sync with the browser's refresh rate
- Calculates FPS by counting frames rendered over a 1-second interval
- Essential for detecting jank and ensuring smooth animations (60 FPS is the target)
- The `isRunning` flag prevents multiple monitoring sessions from running simultaneously

---

## Key Performance APIs Used

| API | Purpose |
|-----|---------|
| `performance.memory` | Get memory usage information (Chrome only) |
| `performance.mark()` | Create custom timestamp markers |
| `performance.measure()` | Measure time between two marks |
| `performance.now()` | Get high-precision timestamp |
| `requestAnimationFrame()` | Sync with browser's refresh rate |

---

## How to Use
1. Open the HTML file in a browser
2. Press F12 to open Developer Tools
3. Click the buttons to trigger different performance monitoring functions
4. View the console output for performance metrics
