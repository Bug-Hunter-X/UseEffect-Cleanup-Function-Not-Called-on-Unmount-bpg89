# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function is not being called when the component unmounts.  This can lead to memory leaks or other unintended side effects.

## Problem

The provided `MyComponent` uses `useEffect` to log the render count. However, the cleanup function, intended to log 'Component unmounted', is not always executed, especially if the component unmounts quickly.

## Solution

The issue is often related to how the component is unmounted. The solution demonstrates a reliable approach to ensure the cleanup function executes, even during rapid component changes.   The solution also adds a check to verify the cleanup function executes correctly.
