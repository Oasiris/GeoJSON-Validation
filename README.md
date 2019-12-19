# Geo Valley

A Promise-based GeoJSON validation library for TypeScript.

* Validates [GeoJSON](http://geojson.org/geojson-spec.html#geojson-objects)s of the following types: Feature, FeatureCollection, Geometry, Geometry Collection.
* Optimized for Typescript + Node.js.
* Customizable output.

## Documentation

- [User Guide](#User-Guide): Learn how to use Geo Valley.
- [Examples](#Examples)
- [API](#API)

## User Guide

Install `geo-valley` using the npm package manager:

```
$ npm install geo-valley
```

Import the library at the top of your file:

```ts
import * as GV from 'geo-valley'
```

## Examples

Say you have a parsed FeatureCollection `myGeojson`:

```ts
const myGeometry = {
    type: 'LineString',
    coordinates: [
        [102.0, 0.0], [103.0, 1.0], [104.0, 0.0]
    ]
}

const myGeojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: myGeometry,
        }
    ]
}
```


Start validating your GeoJSON:

```ts
async function main() {
    const result = await GJ.isFeatureCollection(myGeojson)
    console.log(result)
    // undefined

    const result = await GJ.isFeatureCollection.bool(myGeojson)
    console.log(result)
    // true
}
```

If you use [fp-ts](https://www.npmjs.com/package/fp-ts), you can get the output as type [`Either<string, void>`](https://gcanti.github.io/fp-ts/modules/Either.ts.html):

```ts
import { Either, isLeft, left } from 'fp-ts/lib/Either'

// ...

async function main() {
    const result = await GJ.isGeometry.either(myGeometry)

    if (isLeft(result)) {
        console.log('Errors:', left(result))
    } else {
        console.log('Valid')
    }
}
```

## API

Each function takes one argument—the object you want to validate.

Each function returns `undefined` if the object is **valid**, or `string[]` if the object is **invalid**.

Each function has a `bool` variant that will simply return `true` for valid or `false` for invalid.

---


#### `.isValid(geojson)`
> Checks whether an object is a valid GeoJSON.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isGeojson(input)`
> Checks whether an object is a valid GeoJSON.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isFeature(input)`
> Checks whether an object is a valid Feature.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isFeatureCollection(input)`
> Checks whether an object is a valid FeatureCollection.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isGeometry(input)`
> Checks whether an object is a valid Geometry.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isGeometryCollection(input)`
> Checks whether an object is a valid GeometryCollection.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isPoint(input)`
> Checks whether an object is a valid Point geometry.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isMultiPoint(input)`
> Checks whether an object is a valid MultiPoint geometry.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isLineString(input)`
> Checks whether an object is a valid Line String geometry.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isMultiLineString(input)`
> Checks whether an object is a valid MultiLine String geometry.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isPolygon(input)`
> Checks whether an object is a valid Polygon geometry.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isMultiPolygon(input)`
> Checks whether an object is a valid MultiPolygon geometry.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isBox(input)`
> Checks whether an object is a valid Bounding Box.
> 
> **Returns:** `Promise<string[] | undefined>`

#### `.isPosition(input)`
> Checks whether an object is a valid Position.
> 
> **Returns:** `Promise<string[] | undefined>`

### License

LGPL-3

### Credits

Thanks to:
* [This guide on setting up my first-ever NPM package.](https://medium.com/cameron-nokes/the-30-second-guide-to-publishing-a-typescript-package-to-npm-89d93ff7bccd)
* [The original package author.](https://www.npmjs.com/package/geojson-validation)