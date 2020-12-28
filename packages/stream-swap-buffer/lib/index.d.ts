/// <reference types="node" />
import { Duplex, Stream } from 'stream';
export declare function streamToBuffer(stream: Stream): Promise<unknown>;
export declare function bufferToStream(buffer: Buffer | ArrayBuffer): Duplex;
