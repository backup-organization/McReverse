/*
 * Auto-generated by Frida. Please modify to match the signature of _ZNSt6__ndk112__hash_tableINS_17__hash_value_typeI12HashedStringNS_10shared_ptrIN8JsonUtil25JsonSchemaChildOptionBaseINS4_14JsonParseStateINS4_10EmptyClassENS4_7details14BlockReferenceEEE11CompoundTagEEEEEENS_22__unordered_map_hasherIS2_SE_NS_4hashIS2_EELb1EEENS_21__unordered_map_equalIS2_SE_NS_8equal_toIS2_EELb1EEENS_9allocatorISE_EEE21__construct_node_hashIRKNS_21piecewise_construct_tEJNS_5tupleIJRKS2_EEENSU_IJEEEEEENS_10unique_ptrINS_11__hash_nodeISE_PvEENS_22__hash_node_destructorINSN_IS12_EEEEEEjOT_DpOT0_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZNSt6__ndk112__hash_tableINS_17__hash_value_typeI12HashedStringNS_10shared_ptrIN8JsonUtil25JsonSchemaChildOptionBaseINS4_14JsonParseStateINS4_10EmptyClassENS4_7details14BlockReferenceEEE11CompoundTagEEEEEENS_22__unordered_map_hasherIS2_SE_NS_4hashIS2_EELb1EEENS_21__unordered_map_equalIS2_SE_NS_8equal_toIS2_EELb1EEENS_9allocatorISE_EEE21__construct_node_hashIRKNS_21piecewise_construct_tEJNS_5tupleIJRKS2_EEENSU_IJEEEEEENS_10unique_ptrINS_11__hash_nodeISE_PvEENS_22__hash_node_destructorINSN_IS12_EEEEEEjOT_DpOT0_.
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
    log('_ZNSt6__ndk112__hash_tableINS_17__hash_value_typeI12HashedStringNS_10shared_ptrIN8JsonUtil25JsonSchemaChildOptionBaseINS4_14JsonParseStateINS4_10EmptyClassENS4_7details14BlockReferenceEEE11CompoundTagEEEEEENS_22__unordered_map_hasherIS2_SE_NS_4hashIS2_EELb1EEENS_21__unordered_map_equalIS2_SE_NS_8equal_toIS2_EELb1EEENS_9allocatorISE_EEE21__construct_node_hashIRKNS_21piecewise_construct_tEJNS_5tupleIJRKS2_EEENSU_IJEEEEEENS_10unique_ptrINS_11__hash_nodeISE_PvEENS_22__hash_node_destructorINSN_IS12_EEEEEEjOT_DpOT0_()');
  },

  /**
   * Called synchronously when about to return from _ZNSt6__ndk112__hash_tableINS_17__hash_value_typeI12HashedStringNS_10shared_ptrIN8JsonUtil25JsonSchemaChildOptionBaseINS4_14JsonParseStateINS4_10EmptyClassENS4_7details14BlockReferenceEEE11CompoundTagEEEEEENS_22__unordered_map_hasherIS2_SE_NS_4hashIS2_EELb1EEENS_21__unordered_map_equalIS2_SE_NS_8equal_toIS2_EELb1EEENS_9allocatorISE_EEE21__construct_node_hashIRKNS_21piecewise_construct_tEJNS_5tupleIJRKS2_EEENSU_IJEEEEEENS_10unique_ptrINS_11__hash_nodeISE_PvEENS_22__hash_node_destructorINSN_IS12_EEEEEEjOT_DpOT0_.
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
