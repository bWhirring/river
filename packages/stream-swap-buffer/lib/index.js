"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToStream = exports.streamToBuffer = void 0;
var stream_1 = require("stream");
function streamToBuffer(stream) {
    return new Promise(function (resolve, reject) {
        var buffers = [];
        stream.on('error', reject);
        stream.on('data', function (data) { return buffers.push(data); });
        stream.on('end', function () { return resolve(Buffer.concat(buffers)); });
    });
}
exports.streamToBuffer = streamToBuffer;
function bufferToStream(buffer) {
    var stream = new stream_1.Duplex();
    stream.push(buffer);
    stream.push(null);
    return stream;
}
exports.bufferToStream = bufferToStream;
//# sourceMappingURL=index.js.map