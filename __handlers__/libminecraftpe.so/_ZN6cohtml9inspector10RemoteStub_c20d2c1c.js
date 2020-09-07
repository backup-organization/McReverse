/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN6cohtml9inspector10RemoteStubILb1EMNS0_19InspectorInputAgentEFviiEXadL_ZNS2_14connectGamepadEiiEEJXadL_ZNS0_6STR_IDEEEEE4CallIS2_EEN16rapidjson_cohtml15GenericDocumentINS7_4UTF8IcEENS7_19MemoryPoolAllocatorINS7_12CrtAllocatorEEESC_EEiRT_RKNS7_12GenericValueISA_SD_EE.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN6cohtml9inspector10RemoteStubILb1EMNS0_19InspectorInputAgentEFviiEXadL_ZNS2_14connectGamepadEiiEEJXadL_ZNS0_6STR_IDEEEEE4CallIS2_EEN16rapidjson_cohtml15GenericDocumentINS7_4UTF8IcEENS7_19MemoryPoolAllocatorINS7_12CrtAllocatorEEESC_EEiRT_RKNS7_12GenericValueISA_SD_EE.
   *
   * @this {object} - Object allowing you to store state for use in onLeave.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {array} args - Function arguments represented as an array of NativePointer objects.
   * For example use args[0].readUtf8String() if the first argument is a pointer to a C string encoded as UTF-8.
   * It is also possible to modify arguments by assigning a NativePointer object to an element of this array.
   * @param {object} state - Object allowing you to keep state across function calls.
   * Only one JavaScript function will execute at a time, so do not worry about race-conditions.
   * However, do not use this to store function arguments across onEnter/onLeave, but instead
   * use "this" which is an object for keeping state local to an invocation.
   */
  onEnter: function (log, args, state) {
    log('_ZN6cohtml9inspector10RemoteStubILb1EMNS0_19InspectorInputAgentEFviiEXadL_ZNS2_14connectGamepadEiiEEJXadL_ZNS0_6STR_IDEEEEE4CallIS2_EEN16rapidjson_cohtml15GenericDocumentINS7_4UTF8IcEENS7_19MemoryPoolAllocatorINS7_12CrtAllocatorEEESC_EEiRT_RKNS7_12GenericValueISA_SD_EE()');
  },

  /**
   * Called synchronously when about to return from _ZN6cohtml9inspector10RemoteStubILb1EMNS0_19InspectorInputAgentEFviiEXadL_ZNS2_14connectGamepadEiiEEJXadL_ZNS0_6STR_IDEEEEE4CallIS2_EEN16rapidjson_cohtml15GenericDocumentINS7_4UTF8IcEENS7_19MemoryPoolAllocatorINS7_12CrtAllocatorEEESC_EEiRT_RKNS7_12GenericValueISA_SD_EE.
   *
   * See onEnter for details.
   *
   * @this {object} - Object allowing you to access state stored in onEnter.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {NativePointer} retval - Return value represented as a NativePointer object.
   * @param {object} state - Object allowing you to keep state across function calls.
   */
  onLeave: function (log, retval, state) {
  }
}
