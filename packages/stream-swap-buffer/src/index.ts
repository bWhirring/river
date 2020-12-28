import { Duplex, Stream } from 'stream'

export function streamToBuffer(stream: Stream) {
  return new Promise((resolve, reject) => {
    let buffers = [];
    stream.on('error', reject);
    stream.on('data', (data) => buffers.push(data))
    stream.on('end', () => resolve(Buffer.concat(buffers)))
  });
}



export function bufferToStream(buffer: Buffer | ArrayBuffer) {
  let stream = new Duplex();
  stream.push(buffer);
  stream.push(null);
  return stream;
}