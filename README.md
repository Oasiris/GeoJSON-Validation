# Geo Valley

A Promise-based GeoJSON validation library for TypeScript.

* Validates [GeoJSON](http://geojson.org/geojson-spec.html#geojson-objects)s of the following types: Feature, FeatureCollection, Geometry, Geometry Collection.
* Optimized for Node.js TypeScript.
* Customizable output.

## Documentation

- [User Guide](#User-Guide): Learn how to start using Geo Valley.
- [Examples](#Examples): See usage examples.
- [API](#API): See API.

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
> 
> Variants:
> * `isValid.bool(geojson): Promise<boolean>`
> * `isValid.either(geojson): Promise<Either<string[], void>>`


#### `.isGeojson(input)`
> Checks whether an object is a valid GeoJSON.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isGeojson.bool(input): Promise<boolean>`
> * `isGeojson.either(input): Promise<Either<string[], void>>`

#### `.isFeature(input)`
> Checks whether an object is a valid Feature.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isFeature.bool(input): Promise<boolean>`
> * `isFeature.either(input): Promise<Either<string[], void>>`

#### `.isFeatureCollection(input)`
> Checks whether an object is a valid FeatureCollection.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isFeatureCollection.bool(input): Promise<boolean>`
> * `isFeatureCollection.either(input): Promise<Either<string[], void>>`

#### `.isGeometry(input)`
> Checks whether an object is a valid Geometry.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isGeometry.bool(input): Promise<boolean>`
> * `isGeometry.either(input): Promise<Either<string[], void>>`

#### `.isGeometryCollection(input)`
> Checks whether an object is a valid GeometryCollection.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isGeometryCollection.bool(input): Promise<boolean>`
> * `isGeometryCollection.either(input): Promise<Either<string[], void>>`

#### `.isPoint(input)`
> Checks whether an object is a valid Point geometry.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isPoint.bool(input): Promise<boolean>`
> * `isPoint.either(input): Promise<Either<string[], void>>`

#### `.isMultiPoint(input)`
> Checks whether an object is a valid MultiPoint geometry.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isMultiPoint.bool(input): Promise<boolean>`
> * `isMultiPoint.either(input): Promise<Either<string[], void>>`

#### `.isLineString(input)`
> Checks whether an object is a valid Line String geometry.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isLineString.bool(input): Promise<boolean>`
> * `isLineString.either(input): Promise<Either<string[], void>>`

#### `.isMultiLineString(input)`
> Checks whether an object is a valid MultiLine String geometry.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isMultiLineString.bool(input): Promise<boolean>`
> * `isMultiLineString.either(input): Promise<Either<string[], void>>`

#### `.isPolygon(input)`
> Checks whether an object is a valid Polygon geometry.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isPolygon.bool(input): Promise<boolean>`
> * `isPolygon.either(input): Promise<Either<string[], void>>`

#### `.isMultiPolygon(input)`
> Checks whether an object is a valid MultiPolygon geometry.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isMultiPolygon.bool(input): Promise<boolean>`
> * `isMultiPolygon.either(input): Promise<Either<string[], void>>`

#### `.isBox(input)`
> Checks whether an object is a valid Bounding Box.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isBox.bool(input): Promise<boolean>`
> * `isBox.either(input): Promise<Either<string[], void>>`

#### `.isPosition(input)`
> Checks whether an object is a valid Position.
> 
> **Returns:** `Promise<string[] | undefined>`
> 
> Variants:
> * `isPosition.bool(input): Promise<boolean>`
> * `isPosition.either(input): Promise<Either<string[], void>>`

### License

LGPL-3

### Credits

Thanks to:
* [This guide on setting up my first-ever NPM package.](https://medium.com/cameron-nokes/the-30-second-guide-to-publishing-a-typescript-package-to-npm-89d93ff7bccd)
* [The original package author.](https://www.npmjs.com/package/geojson-validation)