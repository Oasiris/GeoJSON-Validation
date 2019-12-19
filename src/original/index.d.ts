
export type BaseValidatorCallback = (isValid: boolean, errStrings: string[]) => void
export type BaseValidator = (val: object, callback: BaseValidatorCallback) => void

export function isFeature(val: object, callback: BaseValidatorCallback): void
export function isFeatureCollection(val: object, callback: BaseValidatorCallback): void
export function isPoint(val: object, callback: BaseValidatorCallback): void
export function isMultiPoint(val: object, callback: BaseValidatorCallback): void
export function isLineString(val: object, callback: BaseValidatorCallback): void
export function isMultiLineString(val: object, callback: BaseValidatorCallback): void
export function isPolygon(val: object, callback: BaseValidatorCallback): void
export function isMultiPolygon(val: object, callback: BaseValidatorCallback): void
export function isGeometryCollection(val: object, callback: BaseValidatorCallback): void
export function isBox(val: object, callback: BaseValidatorCallback): void
export function isPosition(val: object, callback: BaseValidatorCallback): void
export function isGeoJSONObject(val: object, callback: BaseValidatorCallback): void
export function isGeometryObject(val: object, callback: BaseValidatorCallback): void
