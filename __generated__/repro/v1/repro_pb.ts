// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file repro/v1/repro.proto (package repro.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message repro.v1.MyMessage
 */
export class MyMessage extends Message<MyMessage> {
  /**
   * @generated from field: string field_required = 1;
   */
  fieldRequired = "";

  /**
   * @generated from field: string field_optional = 2;
   */
  fieldOptional = "";

  /**
   * @generated from field: optional string force_optional = 3;
   */
  forceOptional?: string;

  constructor(data?: PartialMessage<MyMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "repro.v1.MyMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "field_required", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "field_optional", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "force_optional", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MyMessage {
    return new MyMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MyMessage {
    return new MyMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MyMessage {
    return new MyMessage().fromJsonString(jsonString, options);
  }

  static equals(a: MyMessage | PlainMessage<MyMessage> | undefined, b: MyMessage | PlainMessage<MyMessage> | undefined): boolean {
    return proto3.util.equals(MyMessage, a, b);
  }
}

