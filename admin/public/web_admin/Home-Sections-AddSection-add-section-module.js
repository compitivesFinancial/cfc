(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home-Sections-AddSection-add-section-module"],{

/***/ "./node_modules/@firebase/storage/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@firebase/storage/dist/index.esm.js ***!
  \**********************************************************/
/*! exports provided: registerStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerStorage", function() { return registerStorage; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain name for firebase storage.
 */
var DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */
var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */
var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */
var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseStorageError = /** @class */ (function () {
    function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
    }
    FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
    };
    FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
    };
    FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
    };
    FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
    };
    Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function () {
            return this.name_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function () {
            return this.code_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function () {
            if (this.serverResponse_) {
                return this.message_ + '\n' + this.serverResponse_;
            }
            else {
                return this.message_;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function () {
            return this.serverResponse_;
        },
        enumerable: false,
        configurable: true
    });
    return FirebaseStorageError;
}());
var Code = {
    // Shared between all platforms
    UNKNOWN: 'unknown',
    OBJECT_NOT_FOUND: 'object-not-found',
    BUCKET_NOT_FOUND: 'bucket-not-found',
    PROJECT_NOT_FOUND: 'project-not-found',
    QUOTA_EXCEEDED: 'quota-exceeded',
    UNAUTHENTICATED: 'unauthenticated',
    UNAUTHORIZED: 'unauthorized',
    RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
    INVALID_CHECKSUM: 'invalid-checksum',
    CANCELED: 'canceled',
    // JS specific
    INVALID_EVENT_NAME: 'invalid-event-name',
    INVALID_URL: 'invalid-url',
    INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
    NO_DEFAULT_BUCKET: 'no-default-bucket',
    CANNOT_SLICE_BLOB: 'cannot-slice-blob',
    SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
    NO_DOWNLOAD_URL: 'no-download-url',
    INVALID_ARGUMENT: 'invalid-argument',
    INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
    APP_DELETED: 'app-deleted',
    INVALID_ROOT_OPERATION: 'invalid-root-operation',
    INVALID_FORMAT: 'invalid-format',
    INTERNAL_ERROR: 'internal-error'
};
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = 'An unknown error occurred, please check the error payload for ' +
        'server response.';
    return new FirebaseStorageError(Code.UNKNOWN, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" +
        bucket +
        "' exceeded, please view quota on " +
        'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = 'User is not authenticated, please authenticate using Firebase ' +
        'Authentication and try again.';
    return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
    return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function canceled() {
    return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
}
function invalidUrl(url) {
    return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function cannotSliceBlob() {
    return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function invalidArgument(index, fnName, message) {
    return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
}
function invalidArgumentCount(argMin, argMax, fnName, real) {
    var countPart;
    var plural;
    if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
    }
    else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
    }
    return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' +
        fnName +
        '`: Expected ' +
        countPart +
        ' ' +
        plural +
        ', received ' +
        real +
        '.');
}
function appDeleted() {
    return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name The name of the operation that was invalid.
 */
function invalidRootOperation(name) {
    return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" +
        name +
        "' cannot be performed on a root reference, create a non-root " +
        "reference using child, such as .child('file.png').");
}
/**
 * @param format The format that was not valid.
 * @param message A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message A message describing the internal error.
 */
function internalError(message) {
    throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var StringFormat = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
};
function formatValidator(stringFormat) {
    switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
            return;
        default:
            throw ('Expected one of the event types: [' +
                StringFormat.RAW +
                ', ' +
                StringFormat.BASE64 +
                ', ' +
                StringFormat.BASE64URL +
                ', ' +
                StringFormat.DATA_URL +
                '].');
    }
}
/**
 * @struct
 */
var StringData = /** @class */ (function () {
    function StringData(data, contentType) {
        this.data = data;
        this.contentType = contentType || null;
    }
    return StringData;
}());
function dataFromString(format, stringData) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
        // do nothing
    }
    // assert(false);
    throw unknown();
}
function utf8Bytes_(value) {
    var b = [];
    for (var i = 0; i < value.length; i++) {
        var c = value.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) === 55296) {
                    // The start of a surrogate pair.
                    var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        var hi = c;
                        var lo = value.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) === 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
    var decoded;
    try {
        decoded = decodeURIComponent(value);
    }
    catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
    switch (format) {
        case StringFormat.BASE64: {
            var hasMinus = value.indexOf('-') !== -1;
            var hasUnder = value.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" +
                    invalidChar +
                    "' found: is it base64url encoded?");
            }
            break;
        }
        case StringFormat.BASE64URL: {
            var hasPlus = value.indexOf('+') !== -1;
            var hasSlash = value.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            value = value.replace(/-/g, '+').replace(/_/g, '/');
            break;
        }
        // do nothing
    }
    var bytes;
    try {
        bytes = atob(value);
    }
    catch (e) {
        throw invalidFormat(format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
/**
 * @struct
 */
var DataURLParts = /** @class */ (function () {
    function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64
                ? middle.substring(0, middle.length - ';base64'.length)
                : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts;
}());
function dataURLBytes_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    }
    else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TaskEvent = {
    /** Triggered whenever the task changes or progress is updated. */
    STATE_CHANGED: 'state_changed'
};
var InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
var TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
            return TaskState.RUNNING;
        case InternalTaskState.PAUSED:
            return TaskState.PAUSED;
        case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;
        case InternalTaskState.CANCELED:
            return TaskState.CANCELED;
        case InternalTaskState.ERROR:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @return False if the object is undefined or null, true otherwise.
 */
function isDef(p) {
    return p != null;
}
function isJustDef(p) {
    return p !== void 0;
}
function isFunction(p) {
    return typeof p === 'function';
}
function isObject(p) {
    return typeof p === 'object';
}
function isNonNullObject(p) {
    return isObject(p) && p !== null;
}
function isNonArrayObject(p) {
    return isObject(p) && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isInteger(p) {
    return isNumber(p) && Number.isInteger(p);
}
function isNumber(p) {
    return typeof p === 'number' || p instanceof Number;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @enum{number}
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
var NetworkXhrIo = /** @class */ (function () {
    function NetworkXhrIo() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise(function (resolve) {
            _this.xhr_.addEventListener('abort', function () {
                _this.errorCode_ = ErrorCode.ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function () {
                _this.errorCode_ = ErrorCode.NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function () {
                resolve(_this);
            });
        });
    }
    /**
     * @override
     */
    NetworkXhrIo.prototype.send = function (url, method, body, headers) {
        if (this.sent_) {
            throw internalError('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (isDef(headers)) {
            for (var key in headers) {
                if (headers.hasOwnProperty(key)) {
                    this.xhr_.setRequestHeader(key, headers[key].toString());
                }
            }
        }
        if (isDef(body)) {
            this.xhr_.send(body);
        }
        else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
            throw internalError('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
            throw internalError('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        }
        catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
            throw internalError('cannot .getResponseText() before sending');
        }
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */
    NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    };
    return NetworkXhrIo;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Factory-like class for creating XhrIo instances.
 */
var XhrIoPool = /** @class */ (function () {
    function XhrIoPool() {
    }
    XhrIoPool.prototype.createXhrIo = function () {
        return new NetworkXhrIo();
    };
    return XhrIoPool;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    }
    else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    }
    else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for (var i = 0; i < args.length; i++) {
            bb.append(args[i]);
        }
        return bb.getBlob();
    }
    else {
        if (isNativeBlobDefined()) {
            return new Blob(args);
        }
        else {
            throw Error("This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    }
    else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    }
    else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param opt_elideCopy If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */
var FbsBlob = /** @class */ (function () {
    function FbsBlob(data, elideCopy) {
        var size = 0;
        var blobType = '';
        if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        }
        else if (data instanceof ArrayBuffer) {
            if (elideCopy) {
                this.data_ = new Uint8Array(data);
            }
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        }
        else if (data instanceof Uint8Array) {
            if (elideCopy) {
                this.data_ = data;
            }
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob.prototype.size = function () {
        return this.size_;
    };
    FbsBlob.prototype.type = function () {
        return this.type_;
    };
    FbsBlob.prototype.slice = function (startByte, endByte) {
        if (isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        }
        else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    };
    FbsBlob.getBlob = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isNativeBlobDefined()) {
            var blobby = args.map(function (val) {
                if (val instanceof FbsBlob) {
                    return val.data_;
                }
                else {
                    return val;
                }
            });
            return new FbsBlob(getBlob.apply(null, blobby));
        }
        else {
            var uint8Arrays = args.map(function (val) {
                if (isString(val)) {
                    return dataFromString(StringFormat.RAW, val).data;
                }
                else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
                for (var i = 0; i < array.length; i++) {
                    merged_1[index_1++] = array[i];
                }
            });
            return new FbsBlob(merged_1, true);
        }
    };
    FbsBlob.prototype.uploadData = function () {
        return this.data_;
    };
    return FbsBlob;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 */
var Location = /** @class */ (function () {
    function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location.prototype, "path", {
        get: function () {
            return this.path_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "isRoot", {
        get: function () {
            return this.path.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString);
        }
        catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        }
        else {
            throw invalidDefaultBucket(bucketString);
        }
    };
    Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-_]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        var gsPath = '(/(.*))?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
        var firebaseStoragePath = '(/([^?#]*).*)?$';
        var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
        var firebaseStorageIndices = { bucket: 1, path: 3 };
        var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
        var cloudStoragePath = '([^?#]*)';
        var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
        var cloudStorageIndices = { bucket: 1, path: 2 };
        var groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            {
                regex: firebaseStorageRegExp,
                indices: firebaseStorageIndices,
                postModify: httpModify
            },
            {
                regex: cloudStorageRegExp,
                indices: cloudStorageIndices,
                postModify: httpModify
            }
        ];
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw invalidUrl(url);
        }
        return location;
    };
    return Location;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    }
    catch (e) {
        return null;
    }
    if (isNonArrayObject(obj)) {
        return obj;
    }
    else {
        return null;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length === 0) {
        return null;
    }
    var index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath
        .split('/')
        .filter(function (component) { return component.length > 0; })
        .join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    }
    else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    }
    else {
        return path.slice(index + 1);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function makeUrl(urlPart) {
    return "https://" + DEFAULT_HOST + "/v0" + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            // @ts-ignore TODO: remove once typescript is upgraded to 3.5.x
            var nextPart = encode(key) + '=' + encode(params[key]);
            queryPart = queryPart + nextPart + '&';
        }
    }
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function noXform_(metadata, value) {
    return value;
}
/**
 * @struct
 */
var Mapping = /** @class */ (function () {
    function Mapping(server, local, writable, xform) {
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
    }
    return Mapping;
}());
var mappings_ = null;
function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) {
        return fullPath;
    }
    else {
        return lastComponent(fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(_metadata, size) {
        if (isDef(size)) {
            return Number(size);
        }
        else {
            return size;
        }
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, service) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new Location(bucket, path);
        return service.makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(service, resource, mappings) {
    var metadata = {};
    metadata['type'] = 'file';
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, service);
    return metadata;
}
function fromResourceString(service, resourceString, mappings) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromResource(service, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    if (!isString(obj['downloadTokens'])) {
        // This can happen if objects are uploaded through GCS and retrieved
        // through list, so we don't want to throw an Error.
        return null;
    }
    var tokens = obj['downloadTokens'];
    if (tokens.length === 0) {
        return null;
    }
    var encode = encodeURIComponent;
    var tokensList = tokens.split(',');
    var urls = tokensList.map(function (token) {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        var base = makeUrl(urlPart);
        var queryString = makeQueryString({
            alt: 'media',
            token: token
        });
        return base + queryString;
    });
    return urls[0];
}
function toResourceString(metadata, mappings) {
    var resource = {};
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}
function metadataValidator(p) {
    if (!isObject(p) || !p) {
        throw 'Expected Metadata object.';
    }
    for (var key in p) {
        if (p.hasOwnProperty(key)) {
            var val = p[key];
            if (key === 'customMetadata') {
                if (!isObject(val)) {
                    throw 'Expected object for \'customMetadata\' mapping.';
                }
            }
            else {
                if (isNonNullObject(val)) {
                    throw "Mapping for '" + key + "' cannot be an object.";
                }
            }
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MAX_RESULTS_KEY = 'maxResults';
var MAX_MAX_RESULTS = 1000;
var PAGE_TOKEN_KEY = 'pageToken';
var PREFIXES_KEY = 'prefixes';
var ITEMS_KEY = 'items';
function fromBackendResponse(service, bucket, resource) {
    var listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource['nextPageToken']
    };
    if (resource[PREFIXES_KEY]) {
        for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
            var path = _a[_i];
            var pathWithoutTrailingSlash = path.replace(/\/$/, '');
            var reference = service.makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
            listResult.prefixes.push(reference);
        }
    }
    if (resource[ITEMS_KEY]) {
        for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
            var item = _c[_b];
            var reference = service.makeStorageReference(new Location(bucket, item['name']));
            listResult.items.push(reference);
        }
    }
    return listResult;
}
function fromResponseString(service, bucket, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromBackendResponse(service, bucket, resource);
}
function listOptionsValidator(p) {
    if (!isObject(p) || !p) {
        throw 'Expected ListOptions object.';
    }
    for (var key in p) {
        if (key === MAX_RESULTS_KEY) {
            if (!isInteger(p[MAX_RESULTS_KEY]) ||
                p[MAX_RESULTS_KEY] <= 0) {
                throw 'Expected maxResults to be a positive number.';
            }
            if (p[MAX_RESULTS_KEY] > 1000) {
                throw "Expected maxResults to be less than or equal to " + MAX_MAX_RESULTS + ".";
            }
        }
        else if (key === PAGE_TOKEN_KEY) {
            if (p[PAGE_TOKEN_KEY] && !isString(p[PAGE_TOKEN_KEY])) {
                throw 'Expected pageToken to be string.';
            }
        }
        else {
            throw 'Unknown option: ' + key;
        }
    }
}

var RequestInfo = /** @class */ (function () {
    function RequestInfo(url, method, 
    /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
    return RequestInfo;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */
function handlerCheck(cndn) {
    if (!cndn) {
        throw unknown();
    }
}
function metadataHandler(service, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function listHandler(service, bucket) {
    function handler(xhr, text) {
        var listResult = fromResponseString(service, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
    }
    return handler;
}
function downloadUrlHandler(service, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text);
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) {
            newErr = unauthenticated();
        }
        else {
            if (xhr.getStatus() === 402) {
                newErr = quotaExceeded(location.bucket);
            }
            else {
                if (xhr.getStatus() === 403) {
                    newErr = unauthorized(location.path);
                }
                else {
                    newErr = err;
                }
            }
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = objectNotFound(location.path);
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function getMetadata(service, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function list(service, location, delimiter, pageToken, maxResults) {
    var urlParams = {};
    if (location.isRoot) {
        urlParams['prefix'] = '';
    }
    else {
        urlParams['prefix'] = location.path + '/';
    }
    if (delimiter && delimiter.length > 0) {
        urlParams['delimiter'] = delimiter;
    }
    if (pageToken) {
        urlParams['pageToken'] = pageToken;
    }
    if (maxResults) {
        urlParams['maxResults'] = maxResults;
    }
    var urlPart = location.bucketOnlyServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
function getDownloadUrl(service, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(service, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'PATCH';
    var body = toResourceString(metadata, mappings);
    var headers = { 'Content-Type': 'application/json; charset=utf-8' };
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(service, location) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'DELETE';
    var timeout = service.maxOperationRetryTime;
    function handler(_xhr, _text) { }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return ((metadata && metadata['contentType']) ||
        (blob && blob.type()) ||
        'application/octet-stream');
}
function metadataForUpload_(location, blob, metadata) {
    var metadataClone = Object.assign({}, metadata);
    metadataClone['fullPath'] = location.path;
    metadataClone['size'] = blob.size();
    if (!metadataClone['contentType']) {
        metadataClone['contentType'] = determineContentType_(null, blob);
    }
    return metadataClone;
}
function multipartUpload(service, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for (var i = 0; i < 2; i++) {
            str = str + Math.random().toString().slice(2);
        }
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata_ = metadataForUpload_(location, blob, metadata);
    var metadataString = toResourceString(metadata_, mappings);
    var preBlobPart = '--' +
        boundary +
        '\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n\r\n' +
        metadataString +
        '\r\n--' +
        boundary +
        '\r\n' +
        'Content-Type: ' +
        metadata_['contentType'] +
        '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw cannotSliceBlob();
    }
    var urlParams = { name: metadata_['fullPath'] };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 * @struct
 */
var ResumableUploadStatus = /** @class */ (function () {
    function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus;
}());
function checkResumeHeader_(xhr, allowed) {
    var status = null;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    }
    catch (e) {
        handlerCheck(false);
    }
    var allowedStatus = allowed || ['active'];
    handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
    return status;
}
function createResumableUpload(service, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadataForUpload = metadataForUpload_(location, blob, metadata);
    var urlParams = { name: metadataForUpload['fullPath'] };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = toResourceString(metadataForUpload, mappings);
    var timeout = service.maxUploadRetryTime;
    function handler(xhr) {
        checkResumeHeader_(xhr);
        var url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        }
        catch (e) {
            handlerCheck(false);
        }
        handlerCheck(isString(url));
        return url;
    }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(service, location, url, blob) {
    var headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString = null;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        }
        catch (e) {
            handlerCheck(false);
        }
        if (!sizeString) {
            // null or empty string
            handlerCheck(false);
        }
        var size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
var resumableUploadChunkSize = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status_ = new ResumableUploadStatus(0, 0);
    if (status) {
        status_.current = status.current;
        status_.total = status.total;
    }
    else {
        status_.current = 0;
        status_.total = blob.size();
    }
    if (blob.size() !== status_.total) {
        throw serverFileWrongSize();
    }
    var bytesLeft = status_.total - status_.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    var startByte = status_.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status_.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) {
        throw cannotSliceBlob();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status_.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(service, mappings)(xhr, text);
        }
        else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 */
var Observer = /** @class */ (function () {
    function Observer(nextOrObserver, error, complete) {
        var asFunctions = isFunction(nextOrObserver) ||
            isDef(error) ||
            isDef(complete);
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error || null;
            this.complete = complete || null;
        }
        else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
        }
    }
    return Observer;
}());

var UploadTaskSnapshot = /** @class */ (function () {
    function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
    }
    return UploadTaskSnapshot;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param name Name of the function.
 * @param specs Argument specs.
 * @param passed The actual arguments passed to the function.
 * @throws {fbs.Error} If the arguments are invalid.
 */
function validate(name, specs, passed) {
    var minArgs = specs.length;
    var maxArgs = specs.length;
    for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
            minArgs = i;
            break;
        }
    }
    var validLength = minArgs <= passed.length && passed.length <= maxArgs;
    if (!validLength) {
        throw invalidArgumentCount(minArgs, maxArgs, name, passed.length);
    }
    for (var i = 0; i < passed.length; i++) {
        try {
            specs[i].validator(passed[i]);
        }
        catch (e) {
            if (e instanceof Error) {
                throw invalidArgument(i, name, e.message);
            }
            else {
                throw invalidArgument(i, name, e);
            }
        }
    }
}
/**
 * @struct
 */
var ArgSpec = /** @class */ (function () {
    function ArgSpec(validator, optional) {
        var self = this;
        this.validator = function (p) {
            if (self.optional && !isJustDef(p)) {
                return;
            }
            validator(p);
        };
        this.optional = !!optional;
    }
    return ArgSpec;
}());
function and_(v1, v2) {
    return function (p) {
        v1(p);
        v2(p);
    };
}
function stringSpec(validator, optional) {
    function stringValidator(p) {
        if (!isString(p)) {
            throw 'Expected string.';
        }
    }
    var chainedValidator;
    if (validator) {
        chainedValidator = and_(stringValidator, validator);
    }
    else {
        chainedValidator = stringValidator;
    }
    return new ArgSpec(chainedValidator, optional);
}
function uploadDataSpec() {
    function validator(p) {
        var valid = p instanceof Uint8Array ||
            p instanceof ArrayBuffer ||
            (isNativeBlobDefined() && p instanceof Blob);
        if (!valid) {
            throw 'Expected Blob or File.';
        }
    }
    return new ArgSpec(validator);
}
function metadataSpec(optional) {
    return new ArgSpec(metadataValidator, optional);
}
function listOptionSpec(optional) {
    return new ArgSpec(listOptionsValidator, optional);
}
function nonNegativeNumberSpec() {
    function validator(p) {
        var valid = isNumber(p) && p >= 0;
        if (!valid) {
            throw 'Expected a number 0 or greater.';
        }
    }
    return new ArgSpec(validator);
}
function looseObjectSpec(validator, optional) {
    function isLooseObjectValidator(p) {
        var isLooseObject = p === null || (isDef(p) && p instanceof Object);
        if (!isLooseObject) {
            throw 'Expected an Object.';
        }
        if (validator !== undefined && validator !== null) {
            validator(p);
        }
    }
    return new ArgSpec(isLooseObjectValidator, optional);
}
function nullFunctionSpec(optional) {
    function validator(p) {
        var valid = p === null || isFunction(p);
        if (!valid) {
            throw 'Expected a Function.';
        }
    }
    return new ArgSpec(validator, optional);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
function async(f) {
    return function () {
        var argsToForward = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(function () { return f.apply(void 0, argsToForward); });
    };
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 */
var UploadTask = /** @class */ (function () {
    /**
     * @param ref The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob The blob to upload.
     */
    function UploadTask(ref, service, location, mappings, blob, metadata) {
        var _this = this;
        if (metadata === void 0) { metadata = null; }
        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.service_ = service;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = InternalTaskState.RUNNING;
        this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;
            if (error.codeEquals(Code.CANCELED)) {
                _this.needToFetchStatus_ = true;
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(InternalTaskState.ERROR);
            }
        };
        this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;
            if (error.codeEquals(Code.CANCELED)) {
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(InternalTaskState.ERROR);
            }
        };
        this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this.promise_.then(null, function () { });
    }
    UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;
        var sizeBefore = this.transferred_;
        return function (loaded) { return _this.updateProgress_(sizeBefore + loaded); };
    };
    UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
    };
    UploadTask.prototype.start_ = function () {
        if (this.state_ !== InternalTaskState.RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this.request_ !== null) {
            return;
        }
        if (this.resumable_) {
            if (this.uploadUrl_ === null) {
                this.createResumable_();
            }
            else {
                if (this.needToFetchStatus_) {
                    this.fetchStatus_();
                }
                else {
                    if (this.needToFetchMetadata_) {
                        // Happens if we miss the metadata on upload completion.
                        this.fetchMetadata_();
                    }
                    else {
                        this.continueUpload_();
                    }
                }
            }
        }
        else {
            this.oneShotUpload_();
        }
    };
    UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.service_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
                case InternalTaskState.RUNNING:
                    callback(authToken);
                    break;
                case InternalTaskState.CANCELING:
                    _this.transition_(InternalTaskState.CANCELED);
                    break;
                case InternalTaskState.PAUSING:
                    _this.transition_(InternalTaskState.PAUSED);
                    break;
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask.prototype.createResumable_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = createResumableUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var createRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
                _this.request_ = null;
                _this.uploadUrl_ = url;
                _this.needToFetchStatus_ = false;
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.fetchStatus_ = function () {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo = getResumableUploadStatus(_this.service_, _this.location_, url, _this.blob_);
            var statusRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
                status = status;
                _this.request_ = null;
                _this.updateProgress_(status.current);
                _this.needToFetchStatus_ = false;
                if (status.finalized) {
                    _this.needToFetchMetadata_ = true;
                }
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.continueUpload_ = function () {
        var _this = this;
        var chunkSize = resumableUploadChunkSize * this.chunkMultiplier_;
        var status = new ResumableUploadStatus(this.transferred_, this.blob_.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo;
            try {
                requestInfo = continueResumableUpload(_this.location_, _this.service_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            }
            catch (e) {
                _this.error_ = e;
                _this.transition_(InternalTaskState.ERROR);
                return;
            }
            var uploadRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = uploadRequest;
            uploadRequest
                .getPromise()
                .then(function (newStatus) {
                _this.increaseMultiplier_();
                _this.request_ = null;
                _this.updateProgress_(newStatus.current);
                if (newStatus.finalized) {
                    _this.metadata_ = newStatus.metadata;
                    _this.transition_(InternalTaskState.SUCCESS);
                }
                else {
                    _this.completeTransitions_();
                }
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = resumableUploadChunkSize * this.chunkMultiplier_;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
        }
    };
    UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = getMetadata(_this.service_, _this.location_, _this.mappings_);
            var metadataRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.transition_(InternalTaskState.SUCCESS);
            }, _this.metadataErrorHandler_);
        });
    };
    UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = multipartUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var multipartRequest = _this.service_.makeRequest(requestInfo, authToken);
            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.updateProgress_(_this.blob_.size());
                _this.transition_(InternalTaskState.SUCCESS);
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this.transferred_ !== old) {
            this.notifyObservers_();
        }
    };
    UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
            return;
        }
        switch (state) {
            case InternalTaskState.CANCELING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case InternalTaskState.PAUSING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case InternalTaskState.RUNNING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this.state_ === InternalTaskState.PAUSED;
                this.state_ = state;
                if (wasPaused) {
                    this.notifyObservers_();
                    this.start_();
                }
                break;
            case InternalTaskState.PAUSED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.CANCELED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.error_ = canceled();
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.ERROR:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.SUCCESS:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
        }
    };
    UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
            case InternalTaskState.PAUSING:
                this.transition_(InternalTaskState.PAUSED);
                break;
            case InternalTaskState.CANCELING:
                this.transition_(InternalTaskState.CANCELED);
                break;
            case InternalTaskState.RUNNING:
                this.start_();
                break;
        }
    };
    Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function () {
            var externalState = taskStateFromInternalTaskState(this.state_);
            return new UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type The type of event to listen for.
     */
    UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        function typeValidator() {
            if (type !== TaskEvent.STATE_CHANGED) {
                throw "Expected one of the event types: [" + TaskEvent.STATE_CHANGED + "].";
            }
        }
        var nextOrObserverMessage = 'Expected a function or an Object with one of ' +
            '`next`, `error`, `complete` properties.';
        var nextValidator = nullFunctionSpec(true).validator;
        var observerValidator = looseObjectSpec(null, true).validator;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function nextOrObserverValidator(p) {
            try {
                nextValidator(p);
                return;
            }
            catch (e) { }
            try {
                observerValidator(p);
                var anyDefined = isJustDef(p['next']) ||
                    isJustDef(p['error']) ||
                    isJustDef(p['complete']);
                if (!anyDefined) {
                    throw '';
                }
                return;
            }
            catch (e) {
                throw nextOrObserverMessage;
            }
        }
        var specs = [
            stringSpec(typeValidator),
            looseObjectSpec(nextOrObserverValidator, true),
            nullFunctionSpec(true),
            nullFunctionSpec(true)
        ];
        validate('on', specs, arguments);
        var self = this;
        function makeBinder(specs) {
            function binder(nextOrObserver, error, complete) {
                if (specs !== null) {
                    validate('on', specs, arguments);
                }
                var observer = new Observer(nextOrObserver, error, completed);
                self.addObserver_(observer);
                return function () {
                    self.removeObserver_(observer);
                };
            }
            return binder;
        }
        function binderNextOrObserverValidator(p) {
            if (p === null) {
                throw nextOrObserverMessage;
            }
            nextOrObserverValidator(p);
        }
        var binderSpecs = [
            looseObjectSpec(binderNextOrObserverValidator),
            nullFunctionSpec(true),
            nullFunctionSpec(true)
        ];
        var typeOnly = !(isJustDef(nextOrObserver) ||
            isJustDef(error) ||
            isJustDef(completed));
        if (typeOnly) {
            return makeBinder(binderSpecs);
        }
        else {
            return makeBinder(null)(nextOrObserver, error, completed);
        }
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
     * @param onRejected The rejection callback.
     */
    UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    UploadTask.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */
    UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
    };
    /**
     * Removes the given observer.
     */
    UploadTask.prototype.removeObserver_ = function (observer) {
        var i = this.observers_.indexOf(observer);
        if (i !== -1) {
            this.observers_.splice(i, 1);
        }
    };
    UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;
        this.finishPromise_();
        var observers = this.observers_.slice();
        observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
        });
    };
    UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
            var triggered = true;
            switch (taskStateFromInternalTaskState(this.state_)) {
                case TaskState.SUCCESS:
                    async(this.resolve_.bind(null, this.snapshot))();
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    var toCall = this.reject_;
                    async(toCall.bind(null, this.error_))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this.resolve_ = null;
                this.reject_ = null;
            }
        }
    };
    UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = taskStateFromInternalTaskState(this.state_);
        switch (externalState) {
            case TaskState.RUNNING:
            case TaskState.PAUSED:
                if (observer.next) {
                    async(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case TaskState.SUCCESS:
                if (observer.complete) {
                    async(observer.complete.bind(observer))();
                }
                break;
            case TaskState.CANCELED:
            case TaskState.ERROR:
                if (observer.error) {
                    async(observer.error.bind(observer, this.error_))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error) {
                    async(observer.error.bind(observer, this.error_))();
                }
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.resume = function () {
        validate('resume', [], arguments);
        var valid = this.state_ === InternalTaskState.PAUSED ||
            this.state_ === InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(InternalTaskState.RUNNING);
        }
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.pause = function () {
        validate('pause', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING;
        if (valid) {
            this.transition_(InternalTaskState.PAUSING);
        }
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.cancel = function () {
        validate('cancel', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING ||
            this.state_ === InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(InternalTaskState.CANCELING);
        }
        return valid;
    };
    return UploadTask;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @param location An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
var Reference = /** @class */ (function () {
    function Reference(service, location) {
        this.service = service;
        if (location instanceof Location) {
            this.location = location;
        }
        else {
            this.location = Location.makeFromUrl(location);
        }
    }
    /**
     * @return The URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    Reference.prototype.toString = function () {
        validate('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
    };
    Reference.prototype.newRef = function (service, location) {
        return new Reference(service, location);
    };
    Reference.prototype.mappings = function () {
        return getMappings();
    };
    /**
     * @return A reference to the object obtained by
     *     appending childPath, removing any duplicate, beginning, or trailing
     *     slashes.
     */
    Reference.prototype.child = function (childPath) {
        validate('child', [stringSpec()], arguments);
        var newPath = child(this.location.path, childPath);
        var location = new Location(this.location.bucket, newPath);
        return this.newRef(this.service, location);
    };
    Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function () {
            var newPath = parent(this.location.path);
            if (newPath === null) {
                return null;
            }
            var location = new Location(this.location.bucket, newPath);
            return this.newRef(this.service, location);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function () {
            var location = new Location(this.location.bucket, '');
            return this.newRef(this.service, location);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "bucket", {
        get: function () {
            return this.location.bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "fullPath", {
        get: function () {
            return this.location.path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "name", {
        get: function () {
            return lastComponent(this.location.path);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "storage", {
        get: function () {
            return this.service;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data The blob to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) { metadata = null; }
        validate('put', [uploadDataSpec(), metadataSpec(true)], arguments);
        this.throwIfRoot_('put');
        return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data), metadata);
    };
    /**
     * Uploads a string to this object's location.
     * @param value The string to upload.
     * @param format The format of the string to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.putString = function (value, format, metadata) {
        if (format === void 0) { format = StringFormat.RAW; }
        validate('putString', [stringSpec(), stringSpec(formatValidator, true), metadataSpec(true)], arguments);
        this.throwIfRoot_('putString');
        var data = dataFromString(format, value);
        var metadataClone = Object.assign({}, metadata);
        if (!isDef(metadataClone['contentType']) &&
            isDef(data.contentType)) {
            metadataClone['contentType'] = data.contentType;
        }
        return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data.data, true), metadataClone);
    };
    /**
     * Deletes the object at this location.
     * @return A promise that resolves if the deletion succeeds.
     */
    Reference.prototype.delete = function () {
        var _this = this;
        validate('delete', [], arguments);
        this.throwIfRoot_('delete');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = deleteObject(_this.service, _this.location);
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * List all items (files) and prefixes (folders) under this storage reference.
     *
     * This is a helper method for calling list() repeatedly until there are
     * no more results. The default pagination size is 1000.
     *
     * Note: The results may not be consistent if objects are changed while this
     * operation is running.
     *
     * Warning: listAll may potentially consume too many resources if there are
     * too many results.
     *
     * @return A Promise that resolves with all the items and prefixes under
     *      the current storage reference. `prefixes` contains references to
     *      sub-directories and `items` contains references to objects in this
     *      folder. `nextPageToken` is never returned.
     */
    Reference.prototype.listAll = function () {
        validate('listAll', [], arguments);
        var accumulator = {
            prefixes: [],
            items: []
        };
        return this.listAllHelper(accumulator).then(function () { return accumulator; });
    };
    Reference.prototype.listAllHelper = function (accumulator, pageToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var opt, nextPage;
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = {
                            // maxResults is 1000 by default.
                            pageToken: pageToken
                        };
                        return [4 /*yield*/, this.list(opt)];
                    case 1:
                        nextPage = _c.sent();
                        (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);
                        (_b = accumulator.items).push.apply(_b, nextPage.items);
                        if (!(nextPage.nextPageToken != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.listAllHelper(accumulator, nextPage.nextPageToken)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * List items (files) and prefixes (folders) under this storage reference.
     *
     * List API is only available for Firebase Rules Version 2.
     *
     * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
     * delimited folder structure.
     * Refer to GCS's List API if you want to learn more.
     *
     * To adhere to Firebase Rules's Semantics, Firebase Storage does not
     * support objects whose paths end with "/" or contain two consecutive
     * "/"s. Firebase Storage List API will filter these unsupported objects.
     * list() may fail if there are too many unsupported objects in the bucket.
     *
     * @param options See ListOptions for details.
     * @return A Promise that resolves with the items and prefixes.
     *      `prefixes` contains references to sub-folders and `items`
     *      contains references to objects in this folder. `nextPageToken`
     *      can be used to get the rest of the results.
     */
    Reference.prototype.list = function (options) {
        validate('list', [listOptionSpec(true)], arguments);
        var self = this;
        return this.service.getAuthToken().then(function (authToken) {
            var op = options || {};
            var requestInfo = list(self.service, self.location, 
            /*delimiter= */ '/', op.pageToken, op.maxResults);
            return self.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     *     A promise that resolves with the metadata for this object. If this
     *     object doesn't exist or metadata cannot be retreived, the promise is
     *     rejected.
     */
    Reference.prototype.getMetadata = function () {
        var _this = this;
        validate('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = getMetadata(_this.service, _this.location, _this.mappings());
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * Updates the metadata for this object.
     * @param metadata The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @return A promise that resolves
     *     with the new metadata for this object.
     *     @see firebaseStorage.Reference.prototype.getMetadata
     */
    Reference.prototype.updateMetadata = function (metadata) {
        var _this = this;
        validate('updateMetadata', [metadataSpec()], arguments);
        this.throwIfRoot_('updateMetadata');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = updateMetadata(_this.service, _this.location, metadata, _this.mappings());
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * @return A promise that resolves with the download
     *     URL for this object.
     */
    Reference.prototype.getDownloadURL = function () {
        var _this = this;
        validate('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = getDownloadUrl(_this.service, _this.location, _this.mappings());
            return _this.service
                .makeRequest(requestInfo, authToken)
                .getPromise()
                .then(function (url) {
                if (url === null) {
                    throw noDownloadURL();
                }
                return url;
            });
        });
    };
    Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
            throw invalidRootOperation(name);
        }
    };
    return Reference;
}());

/**
 * A request whose promise always fails.
 * @struct
 * @template T
 */
var FailRequest = /** @class */ (function () {
    function FailRequest(error) {
        this.promise_ = Promise.reject(error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (_appDelete) {
    };
    return FailRequest;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    // TODO: find a way to exclude Node type definition for storage because storage only works in browser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
    // the no-explicit-any rule when ESlint releases it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function triggerCallback() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, args);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
    // the no-explicit-any rule when ESlint releases it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handler(success) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (triggeredCallback) {
            return;
        }
        if (success) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
        }
        var mustStop = canceled() || hitTimeout;
        if (mustStop) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        }
        else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        if (triggeredCallback) {
            return;
        }
        if (timeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(timeoutId);
            callWithDelay(0);
        }
        else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    setTimeout(function () {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 * @template T
 */
var NetworkRequest = /** @class */ (function () {
    function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        var _this = this;
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.resolve_ = null;
        this.reject_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    NetworkRequest.prototype.start_ = function () {
        var self = this;
        function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) {
                    self.progressCallback_(loaded, total);
                }
            }
            if (self.progressCallback_ !== null) {
                xhr.addUploadProgressListener(progressListener);
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            xhr
                .send(self.url_, self.method_, self.body_, self.headers_)
                .then(function (xhr) {
                if (self.progressCallback_ !== null) {
                    xhr.removeUploadProgressListener(progressListener);
                }
                self.pendingXhr_ = null;
                xhr = xhr;
                var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
                var status = xhr.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = self.successCodes_.indexOf(status) !== -1;
                backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) {
                try {
                    var result = self.callback_(xhr, xhr.getResponseText());
                    if (isJustDef(result)) {
                        resolve(result);
                    }
                    else {
                        resolve();
                    }
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                if (xhr !== null) {
                    var err = unknown();
                    err.setServerResponseProp(xhr.getResponseText());
                    if (self.errorCallback_) {
                        reject(self.errorCallback_(xhr, err));
                    }
                    else {
                        reject(err);
                    }
                }
                else {
                    if (status.canceled) {
                        var err = self.appDelete_ ? appDeleted() : canceled();
                        reject(err);
                    }
                    else {
                        var err = retryLimitExceeded();
                        reject(err);
                    }
                }
            }
        }
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        }
        else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
        }
    };
    /** @inheritDoc */
    NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            stop(this.backoffId_);
        }
        if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
        }
    };
    NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
        var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest;
}());
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled Defaults to false.
 * @struct
 */
var RequestEndStatus = /** @class */ (function () {
    function RequestEndStatus(wasSuccessCode, xhr, canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!canceled;
    }
    return RequestEndStatus;
}());
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers) {
    var version = typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a !== 'undefined' ? _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION : 'AppManager';
    headers['X-Firebase-Storage-Version'] = 'webjs/' + version;
}
function addGmpidHeader_(headers, appId) {
    if (appId) {
        headers['X-Firebase-GMPID'] = appId;
    }
}
/**
 * @template T
 */
function makeRequest(requestInfo, appId, authToken, pool) {
    var queryPart = makeQueryString(requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = Object.assign({}, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 *
 * @struct
 */
var StorageService = /** @class */ (function () {
    function StorageService(app, authProvider, pool, url) {
        var _a;
        this.bucket_ = null;
        this.appId_ = null;
        this.deleted_ = false;
        this.app_ = app;
        this.authProvider_ = authProvider;
        this.maxOperationRetryTime_ = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this.maxUploadRetryTime_ = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this.requests_ = new Set();
        this.pool_ = pool;
        if (url != null) {
            this.bucket_ = Location.makeFromBucketSpec(url);
        }
        else {
            this.bucket_ = StorageService.extractBucket_((_a = this.app_) === null || _a === void 0 ? void 0 : _a.options);
        }
        this.internals_ = new ServiceInternals(this);
    }
    StorageService.extractBucket_ = function (config) {
        var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
        if (bucketString == null) {
            return null;
        }
        return Location.makeFromBucketSpec(bucketString);
    };
    StorageService.prototype.getAuthToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var auth, tokenData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        auth = this.authProvider_.getImmediate({ optional: true });
                        if (!auth) return [3 /*break*/, 2];
                        return [4 /*yield*/, auth.getToken()];
                    case 1:
                        tokenData = _a.sent();
                        if (tokenData !== null) {
                            return [2 /*return*/, tokenData.accessToken];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    StorageService.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requests_.forEach(function (request) { return request.cancel(); });
        this.requests_.clear();
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     * @param loc The Location.
     * @return A firebaseStorage.Reference.
     */
    StorageService.prototype.makeStorageReference = function (loc) {
        return new Reference(this, loc);
    };
    StorageService.prototype.makeRequest = function (requestInfo, authToken) {
        var _this = this;
        if (!this.deleted_) {
            var request_1 = makeRequest(requestInfo, this.appId_, authToken, this.pool_);
            this.requests_.add(request_1);
            // Request removes itself from set when complete.
            request_1.getPromise().then(function () { return _this.requests_.delete(request_1); }, function () { return _this.requests_.delete(request_1); });
            return request_1;
        }
        else {
            return new FailRequest(appDeleted());
        }
    };
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    StorageService.prototype.ref = function (path) {
        function validator(path) {
            if (typeof path !== 'string') {
                throw 'Path is not a string.';
            }
            if (/^[A-Za-z]+:\/\//.test(path)) {
                throw 'Expected child path but got a URL, use refFromURL instead.';
            }
        }
        validate('ref', [stringSpec(validator, true)], arguments);
        if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
        }
        var ref = new Reference(this, this.bucket_);
        if (path != null) {
            return ref.child(path);
        }
        else {
            return ref;
        }
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    StorageService.prototype.refFromURL = function (url) {
        function validator(p) {
            if (typeof p !== 'string') {
                throw 'Path is not a string.';
            }
            if (!/^[A-Za-z]+:\/\//.test(p)) {
                throw 'Expected full URL but got a child path, use ref instead.';
            }
            try {
                Location.makeFromUrl(p);
            }
            catch (e) {
                throw 'Expected valid full URL but got an invalid one.';
            }
        }
        validate('refFromURL', [stringSpec(validator, false)], arguments);
        return new Reference(this, url);
    };
    Object.defineProperty(StorageService.prototype, "maxUploadRetryTime", {
        get: function () {
            return this.maxUploadRetryTime_;
        },
        enumerable: false,
        configurable: true
    });
    StorageService.prototype.setMaxUploadRetryTime = function (time) {
        validate('setMaxUploadRetryTime', [nonNegativeNumberSpec()], arguments);
        this.maxUploadRetryTime_ = time;
    };
    Object.defineProperty(StorageService.prototype, "maxOperationRetryTime", {
        get: function () {
            return this.maxOperationRetryTime_;
        },
        enumerable: false,
        configurable: true
    });
    StorageService.prototype.setMaxOperationRetryTime = function (time) {
        validate('setMaxOperationRetryTime', [nonNegativeNumberSpec()], arguments);
        this.maxOperationRetryTime_ = time;
    };
    Object.defineProperty(StorageService.prototype, "app", {
        get: function () {
            return this.app_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "INTERNAL", {
        get: function () {
            return this.internals_;
        },
        enumerable: false,
        configurable: true
    });
    return StorageService;
}());
/**
 * @struct
 */
var ServiceInternals = /** @class */ (function () {
    function ServiceInternals(service) {
        this.service_ = service;
    }
    /**
     * Called when the associated app is deleted.
     */
    ServiceInternals.prototype.delete = function () {
        this.service_.deleteApp();
        return Promise.resolve();
    };
    return ServiceInternals;
}());

var name = "@firebase/storage";
var version = "0.3.41";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Storage.
 */
var STORAGE_TYPE = 'storage';
function factory(container, url) {
    // Dependencies
    var app = container.getProvider('app').getImmediate();
    var authProvider = container.getProvider('auth-internal');
    return new StorageService(app, authProvider, new XhrIoPool(), url);
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: TaskState,
        TaskEvent: TaskEvent,
        StringFormat: StringFormat,
        Storage: StorageService,
        Reference: Reference
    };
    instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](STORAGE_TYPE, factory, "PUBLIC" /* PUBLIC */)
        .setServiceProps(namespaceExports)
        .setMultipleInstances(true));
    instance.registerVersion(name, version);
}
registerStorage(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/storage/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage */ "./node_modules/@firebase/storage/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n      <div class=\"col-md-5 align-self-center\">\r\n        <h4 class=\"text-themecolor\">{{id ? 'Add Section' : 'Edit Section'}}</h4>\r\n      </div>\r\n      <div class=\"col-md-7 align-self-center text-right\">\r\n        <div class=\"d-flex justify-content-end align-items-center\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">{{LANG.Home}}</a></li>\r\n            <li class=\"breadcrumb-item active\">{{id ? 'Add Section' : 'Edit Section'}}</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <form class=\"mt-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.TITLE}}</label>\r\n                    <input\r\n                      type=\"email\"\r\n                      class=\"form-control\"\r\n                      name=\"title\"\r\n                      placeholder=\"{{LANG.Enter_Title}}\"\r\n                      [(ngModel)]=\"title\"\r\n                    />\r\n                    <span class=\"error\" *ngIf=\"error.title\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputPassword1\"\r\n                      >{{LANG.AR_TITLE}}</label\r\n                    >\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control text-right\"\r\n                      name=\"title_ar\"\r\n                      placeholder=\"{{LANG.Enter_Ar_title}}\"\r\n                      [(ngModel)]=\"title_ar\"\r\n                    />\r\n                    <span class=\"error\" *ngIf=\"error.title_ar\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row pb-3\" *ngIf=\"type != '7' && type != '9'\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group has-success\">\r\n                    <label class=\"control-label\">{{LANG.Image}}</label>\r\n                    <div class=\"add-image\">\r\n                        <input type=\"file\" (change)=\"changeImage($event)\" id=\"fileInput\" [disabled]=\"disabled_inputs\" class=\"form-control\">\r\n                        <div [class.image]=\"type != '0'\" *ngIf=\"image\">\r\n                            <img [src]=\"image\" class=\"\" *ngIf=\"type != '0'\"> \r\n                            <video width=\"400\" controls *ngIf=\"type == '0'\" class=\"video mt-2\">\r\n                              <source [src]=\"image\" id=\"video\">\r\n                                Your browser does not support HTML5 video.\r\n                            </video>\r\n                            <ng-container *ngIf=\"progress && progress !== 100\">\r\n                                <div class=\"text-center mt-2\">\r\n                                  <progress max=\"100\" [value]=\"progress\"></progress>\r\n                                </div>\r\n                            </ng-container>   \r\n                        </div>\r\n                    </div>\r\n                    <!-- <span class=\"error mt-2 mb-5\" *ngIf=\"error.image\">{{LANG.This_field_is_required}}</span> -->\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group has-success\">\r\n                    <label class=\"control-label\">{{LANG.AR_Image}}</label>\r\n                    <div class=\"add-image\">\r\n                        <input type=\"file\" (change)=\"changeImage($event,1)\" id=\"ar_fileInput\" [disabled]=\"disabled_inputs\" class=\"form-control\">\r\n                        <div [class.image]=\"type != '0'\" *ngIf=\"ar_image\">\r\n                            <img [src]=\"ar_image\" class=\"\" *ngIf=\"type != '0'\">\r\n                            <video width=\"400\" controls *ngIf=\"type == '0'\" class=\"video mt-2\">\r\n                              <source [src]=\"ar_image\" id=\"ar_video\">\r\n                                Your browser does not support HTML5 video.\r\n                            </video>\r\n                            <ng-container *ngIf=\"ar_progress && ar_progress !== 100\">\r\n                                <div class=\"text-center mt-2\">\r\n                                  <progress max=\"100\" [value]=\"ar_progress\"></progress>\r\n                                </div>\r\n                            </ng-container>   \r\n                        </div>\r\n                    </div>\r\n                    <!-- <span class=\"error mt-2 mb-5\" *ngIf=\"error.image\">{{LANG.This_field_is_required}}</span> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row pb-3\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group has-success mb-0\">\r\n                    <label class=\"control-label\">{{LANG.Status}}</label>\r\n                    <select\r\n                      class=\"form-control custom-select\"\r\n                      name=\"status\"\r\n                      [(ngModel)]=\"status\" \r\n                    >\r\n                      <option value=\"1\">{{LANG.Active}}</option>\r\n                      <option value=\"2\">{{LANG.Inactive}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row mb-3\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">{{LANG.description}}</label>\r\n                    <textarea\r\n                      type=\"text-right\"\r\n                      class=\"form-control\"\r\n                      name=\"description\"\r\n                      placeholder=\"{{LANG.enter_description}}\"\r\n                      [(ngModel)]=\"description\"\r\n                      id=\"editor\"\r\n                    ></textarea>\r\n                    <span class=\"error\" *ngIf=\"error.description\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"exampleInputPassword2\"\r\n                      >{{LANG.ar_description}}</label\r\n                    >\r\n                    <textarea\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      name=\"ar_description\"\r\n                      placeholder=\"{{LANG.enter_ar_description}}\"\r\n                      [(ngModel)]=\"ar_description\"\r\n                      id=\"editor1\"\r\n\r\n                    ></textarea>\r\n                    <span class=\"error\" *ngIf=\"error.ar_description\">{{LANG.This_field_is_required}}</span>\r\n  \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n  \r\n              <button *ngIf=\"!load\" type=\"submit\" class=\"btn btn-primary\" (click)=\"addSection()\">{{id ? LANG.Update : LANG.Submit}}</button>\r\n              <button class=\"btn btn-primary\" *ngIf=\"load\">                                \r\n                  <loader></loader>\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\r\n    background: #d3d3d39e;\r\n    text-align: center;\r\n    border-radius: 12px;\r\n    padding: 15px;\r\n    width: 200px;\r\n    height: 200px;\r\n    margin: 10px 0;\r\n}\r\n.image img{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\ntextarea{\r\n    height: 250px;\r\n}\r\n.video{\r\n    height: 250px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvRGFzaGJvYXJkL0hvbWUvU2VjdGlvbnMvQWRkU2VjdGlvbi9hZGQtc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Rhc2hib2FyZC9Ib21lL1NlY3Rpb25zL0FkZFNlY3Rpb24vYWRkLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXtcclxuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM5ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi5pbWFnZSBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4udmlkZW97XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSectionComponent", function() { return AddSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Services/kyc.service */ "./src/app/shared/Services/kyc.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var AddSectionComponent = /** @class */ (function () {
    function AddSectionComponent(kycService, toastr, route, location, sanitization) {
        var _this = this;
        this.kycService = kycService;
        this.toastr = toastr;
        this.route = route;
        this.location = location;
        this.sanitization = sanitization;
        this.id = "";
        this.title = "";
        this.title_ar = "";
        this.description = "";
        this.ar_description = "";
        this.status = "1";
        this.type = "1";
        this.err = false;
        this.load = false;
        this.image_file = {};
        this.ar_image_file = {};
        this.error = {
            title: false,
            title_ar: false,
            description: false,
            ar_description: false,
            image: false,
            ar_image: false,
        };
        this.LANG = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].english_translations;
        this.image_selected = false;
        this.ar_image_selected = false;
        this.route.queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.id = atob(atob(params['id']));
                _this.getSectionDetails();
            }
            if (params['type']) {
                _this.type = atob(atob(params['type']));
            }
        });
    }
    AddSectionComponent.prototype.ngOnInit = function () {
        $('#editor').summernote({
            height: 200,
        });
        $('#editor1').summernote({
            height: 200,
        });
    };
    AddSectionComponent.prototype.showFileInput = function () {
        var fileInput = document.getElementById("fileInput");
        fileInput.click();
    };
    AddSectionComponent.prototype.changeImage = function (event, type) {
        var _this = this;
        var file = event.target.files[0];
        var ext = file.type.split('/').pop().toLowerCase();
        if (this.type == "0") {
            if (ext !== "mp4") {
                this.toastr.warningToastr("", file.name + "is not a valid file");
                return false;
            }
        }
        if (this.type != "0") {
            if (ext !== "jpeg" && ext !== "jpg" && ext !== "png" && file.name.split(".").pop().toLowerCase() !== "svg") {
                this.toastr.warningToastr("", file.name + "is not a valid file");
                return false;
            }
        }
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                // this.image=e.target.result;
                if (type) {
                    _this.ar_image = _this.sanitization.bypassSecurityTrustUrl(e.target.result);
                    _this.ar_image_file = file;
                    _this.ar_image_selected = true;
                }
                else {
                    _this.image = _this.sanitization.bypassSecurityTrustUrl(e.target.result);
                    _this.image_file = file;
                    _this.image_selected = true;
                }
                // this.uploadImage(data)
            };
            reader.readAsDataURL(file);
            if (this.type == "0" && type) {
                this.ar_image = event.target.result;
            }
            else if (this.type == "0" && !type) {
                this.image = event.target.result;
            }
        }
        return;
    };
    AddSectionComponent.prototype.uploadImage = function (data, type) {
        var _this = this;
        var n = Date.now();
        var fileName = this.image_file.name;
        var path = fileName + n;
        var filePath = "Kyc/" + path;
        this.load = true;
        var uploadTask = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child("" + filePath).put(this.image_file);
        uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            _this.progress = progress;
        }, function (error) { return console.log(error); }, function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, uploadTask.snapshot.ref.getDownloadURL().then(function (res) {
                            _this.image = res;
                            data.image = res;
                            if (type) {
                                _this.uploadARImage(data);
                                return;
                            }
                            if (_this.id) {
                                _this.update(data);
                                return;
                            }
                            _this.add(data);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AddSectionComponent.prototype.uploadARImage = function (data) {
        var _this = this;
        var n = Date.now();
        var fileName = this.ar_image_file.name;
        var path = fileName + n;
        var filePath = "Kyc/" + path;
        this.load = true;
        var uploadTask = firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child("" + filePath).put(this.ar_image_file);
        uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_6__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            _this.ar_progress = progress;
        }, function (error) { return console.log(error); }, function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, uploadTask.snapshot.ref.getDownloadURL().then(function (res) {
                            _this.ar_image = res;
                            data.ar_image = res;
                            if (_this.id) {
                                _this.update(data);
                                return;
                            }
                            _this.add(data);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AddSectionComponent.prototype.errorHandler = function () {
        var description = $("#editor").val();
        var ar_description = $("#editor1").val();
        if (this.title == undefined || this.title == '') {
            this.error.title = true;
            this.err = true;
        }
        if (this.title_ar == undefined || this.title_ar == '') {
            this.error.title_ar = true;
            this.err = true;
        }
        if (description == undefined || description == '') {
            this.error.description = true;
            this.err = true;
        }
        if (ar_description == undefined || ar_description == '') {
            this.error.ar_description = true;
            this.err = true;
        }
    };
    AddSectionComponent.prototype.resetError = function () {
        this.err = false;
        this.load = false;
        this.error = {
            title: false,
            title_ar: false,
            description: false,
            ar_description: false,
            image: false,
            ar_image: false,
        };
    };
    AddSectionComponent.prototype.addSection = function () {
        this.resetError();
        this.errorHandler();
        if (this.err) {
            return;
        }
        var description = $("#editor").val();
        var ar_description = $("#editor1").val();
        var data = {
            "title": this.title,
            "ar_title": this.title_ar,
            "description": description,
            "ar_description": ar_description,
            "status": this.status,
            "type": this.type,
            "image": this.image,
            "ar_image": this.ar_image
        };
        this.load = true;
        if (this.image_selected && !this.ar_image_selected) {
            data.id = this.id;
            this.uploadImage(data);
            return;
        }
        if (this.image_selected && this.ar_image_selected) {
            data.id = this.id;
            this.uploadImage(data, 1);
            return;
        }
        if (this.ar_image_selected) {
            data.id = this.id;
            this.uploadARImage(data);
            return;
        }
        if (this.id) {
            data.id = this.id;
            this.update(data);
            return;
        }
        this.add(data);
    };
    AddSectionComponent.prototype.getSectionDetails = function () {
        var _this = this;
        this.kycService.getSectionDetails(this.id).subscribe(function (res) {
            if (res.status) {
                _this.title = res.response.title;
                _this.title_ar = res.response.ar_title;
                _this.description = res.response.description;
                _this.ar_description = res.response.ar_description;
                _this.status = res.response.status;
                _this.image = res.response.image;
                _this.ar_image = res.response.ar_image;
                _this.type = res.response.type.toString();
                $('#editor').summernote('code', _this.description);
                $('#editor1').summernote('code', _this.ar_description);
            }
        });
    };
    AddSectionComponent.prototype.add = function (data) {
        var _this = this;
        this.kycService.insertSection(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(res.response.message);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddSectionComponent.prototype.update = function (data) {
        var _this = this;
        this.kycService.updateSection(data).subscribe(function (res) {
            _this.load = false;
            if (res.status) {
                _this.toastr.successToastr(res.response.message);
                _this.location.back();
                return;
            }
            _this.toastr.warningToastr(res.message);
        });
    };
    AddSectionComponent.ctorParameters = function () { return [
        { type: src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__["KYCService"] },
        { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }
    ]; };
    AddSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-section',
            template: __webpack_require__(/*! raw-loader!./add-section.component.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.component.html"),
            styles: [__webpack_require__(/*! ./add-section.component.css */ "./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_Services_kyc_service__WEBPACK_IMPORTED_MODULE_4__["KYCService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], AddSectionComponent);
    return AddSectionComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddSectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSectionModule", function() { return AddSectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/loader/Loader.module */ "./src/app/shared/loader/Loader.module.ts");
/* harmony import */ var _add_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-section.component */ "./src/app/Pages/Dashboard/Home/Sections/AddSection/add-section.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChildRoutes = [
    {
        path: 'add-section',
        component: _add_section_component__WEBPACK_IMPORTED_MODULE_5__["AddSectionComponent"]
    },
];
var AddSectionModule = /** @class */ (function () {
    function AddSectionModule() {
    }
    AddSectionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ChildRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_loader_Loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [
                _add_section_component__WEBPACK_IMPORTED_MODULE_5__["AddSectionComponent"]
            ]
        })
    ], AddSectionModule);
    return AddSectionModule;
}());



/***/ })

}]);
//# sourceMappingURL=Home-Sections-AddSection-add-section-module.js.map