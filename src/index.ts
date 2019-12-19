import * as GJV from './original/'

import {
    Either,
    left,
    right
} from 'fp-ts/lib/Either'

export type BaseValidatorCallback = GJV.BaseValidatorCallback
export type BaseValidator = GJV.BaseValidator

type PromiseBasedValidator = (val: any) => Promise<Either<string[], void>>

function promisifyValidator(baseValidator: BaseValidator): PromiseBasedValidator {
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

export const isFeature: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isFeature)
export const isFeatureCollection: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isFeatureCollection)
export const isPoint: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isPoint)
export const isMultiPoint: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isMultiPoint)
export const isLineString: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isLineString)
export const isMultiLineString: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isMultiLineString)
export const isPolygon: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isPolygon)
export const isMultiPolygon: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isMultiPolygon)
export const isGeometryCollection: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isGeometryCollection)
export const isBox: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isBox)
export const isPosition: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isPosition)

/**
 * Checks if an object is a GeoJSON Object.
 */
export const isGeoJSONObject: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isGeoJSONObject)
export const isGeometryObject: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isGeometryObject)

export const isValid: (val: any) => Promise<Either<string[], void>> = promisifyValidator(GJV.isGeoJSONObject)
