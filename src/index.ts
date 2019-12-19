import * as GJV from './original/'

import {
    Either,
    left,
    right,
} from 'fp-ts/lib/Either'

export type BaseValidatorCallback = GJV.BaseValidatorCallback
export type BaseValidator = GJV.BaseValidator

// type PromiseDefaultValidator = (val: any) => Promise<string[] | undefined>
// type PromiseBooleanValidator = (val: any) => Promise<boolean>
// type PromiseEitherValidator = (val: any) => Promise<Either<string[], void>>

interface IValidator {
    (val: any): Promise<string[] | undefined>

    /** Validator that resolves to a `boolean`. */
    bool: (val: any) => Promise<boolean>

    /** Validator that resolves to the `Either` type from the `fp-ts` library. */
    either: (val: any) => Promise<Either<string[], void>>
}

function convertValidatorDefault(baseValidator: BaseValidator): (val: any) => Promise<string[] | undefined> {
    return function(val: any) {
        return new Promise((resolve) => {
            if (typeof val !== 'object') {
                resolve(['Not an object'])
            }
            baseValidator(val, (isValid, errors) => {
                if (isValid === true) {
                    resolve(undefined)
                } else {
                    resolve(errors)
                }
            })
        })
    }
}

/**
 * Test.
 */
function convertValidatorBoolean(baseValidator: BaseValidator): (val: any) => Promise<boolean> {
    return function(val: any) {
        return new Promise((resolve) => {
            if (typeof val !== 'object') {
                resolve(false)
            }
            baseValidator(val, (isValid, errors) => {
                resolve(isValid)
            })
        })
    }
}

/**
 * Test 2.
 */
function convertValidatorEither(baseValidator: BaseValidator): (val: any) => Promise<Either<string[], void>> {
    return function(val: any) {
        return new Promise((resolve) => {
            if (typeof val !== 'object') {
                resolve(left(['Not an object']))
            }
            baseValidator(val, (isValid, errors) => {
                if (isValid === true) {
                    resolve(right(undefined))
                } else {
                    resolve(left(errors))
                }
            })
        })
    }
}

function convertValidator(baseValidator: BaseValidator): IValidator {
    const validator = convertValidatorDefault(baseValidator) as any
    validator.bool = convertValidatorBoolean(baseValidator)
    validator.either = convertValidatorEither(baseValidator)
    return validator
}

/**
 * Checks if an object is a Feature.
 */
export const isFeature = convertValidator(GJV.isFeature)
/**
 * Checks if an object is a FeatureCollection.
 */
export const isFeatureCollection: IValidator = convertValidator(GJV.isFeatureCollection)
/**
 * Checks if an object is a Point geometry.
 */
export const isPoint: IValidator = convertValidator(GJV.isPoint)
/**
 * Checks if an object is a MultiPoint geometry.
 */
export const isMultiPoint: IValidator = convertValidator(GJV.isMultiPoint)
/**
 * Checks if an object is a Line String geometry.
 */
export const isLineString: IValidator = convertValidator(GJV.isLineString)
/**
 * Checks if an object is a MultiLine String geometry.
 */
export const isMultiLineString: IValidator = convertValidator(GJV.isMultiLineString)
/**
 * Checks if an object is a Polygon geometry.
 */
export const isPolygon: IValidator = convertValidator(GJV.isPolygon)
/**
 * Checks if an object is a MultiPolygon geometry.
 */
export const isMultiPolygon: IValidator = convertValidator(GJV.isMultiPolygon)
/**
 * Checks if an object is a GeometryCollection.
 */
export const isGeometryCollection: IValidator = convertValidator(GJV.isGeometryCollection)
/**
 * Checks if an object is a Bounding Box.
 */
export const isBox: IValidator = convertValidator(GJV.isBox)
/**
 * Checks if an object is a Position.
 */
export const isPosition: IValidator = convertValidator(GJV.isPosition)
/**
 * Checks if an object is a GeoJSON Object.
 */
export const isGeoJSONObject: IValidator = convertValidator(GJV.isGeoJSONObject)
/**
 * Checks if an object is a Geometry.
 */
export const isGeometryObject: IValidator = convertValidator(GJV.isGeometryObject)
/**
 * Checks if an object is a valid GeoJSON.
 */
export const isValid: IValidator = convertValidator(GJV.isGeoJSONObject)
