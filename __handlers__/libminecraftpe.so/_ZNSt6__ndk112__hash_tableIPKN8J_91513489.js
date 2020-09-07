/*
 * Auto-generated by Frida. Please modify to match the signature of _ZNSt6__ndk112__hash_tableIPKN8JsonUtil32JsonSchemaNodeChildSchemaOptionsINS1_14JsonParseStateINS3_INS1_10EmptyClassENS1_7details14BlockReferenceEEE11CompoundTagEEiEENS_4hashISC_EENS_8equal_toISC_EENS_9allocatorISC_EEE17__deallocate_nodeEPNS_16__hash_node_baseIPNS_11__hash_nodeISC_PvEEEE.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZNSt6__ndk112__hash_tableIPKN8JsonUtil32JsonSchemaNodeChildSchemaOptionsINS1_14JsonParseStateINS3_INS1_10EmptyClassENS1_7details14BlockReferenceEEE11CompoundTagEEiEENS_4hashISC_EENS_8equal_toISC_EENS_9allocatorISC_EEE17__deallocate_nodeEPNS_16__hash_node_baseIPNS_11__hash_nodeISC_PvEEEE.
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
    log('_ZNSt6__ndk112__hash_tableIPKN8JsonUtil32JsonSchemaNodeChildSchemaOptionsINS1_14JsonParseStateINS3_INS1_10EmptyClassENS1_7details14BlockReferenceEEE11CompoundTagEEiEENS_4hashISC_EENS_8equal_toISC_EENS_9allocatorISC_EEE17__deallocate_nodeEPNS_16__hash_node_baseIPNS_11__hash_nodeISC_PvEEEE()');
  },

  /**
   * Called synchronously when about to return from _ZNSt6__ndk112__hash_tableIPKN8JsonUtil32JsonSchemaNodeChildSchemaOptionsINS1_14JsonParseStateINS3_INS1_10EmptyClassENS1_7details14BlockReferenceEEE11CompoundTagEEiEENS_4hashISC_EENS_8equal_toISC_EENS_9allocatorISC_EEE17__deallocate_nodeEPNS_16__hash_node_baseIPNS_11__hash_nodeISC_PvEEEE.
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
