# @Reviewers!
The trial day version lives at tag `trial-day-finish`:

```shell
git checkout trial-day-finish
```

**The version on master has been worked on after EOB (15:00 CET) on 2021-06-02!**

# React-Crop

A react component for cropping things, using a nice interface.

## Usage

Wrap the target element inside `<Crop>` and supply an `onChange` callback:

```typescript jsx
<Crop onChange={yourCallback}>
  <img ... />
</Crop>
```

The types for the `onChange` callback are these:

```typescript jsx
export type CropEventHandler = (e: CropRect) => any

export interface CropRect {
  x: number
  y: number
  width: number
  height: number
}
```