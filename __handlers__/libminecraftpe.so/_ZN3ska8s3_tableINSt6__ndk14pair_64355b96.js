/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN3ska8s3_tableINSt6__ndk14pairIN3csl9container12basic_stringIcNS1_11char_traitsIcEEN6cohtml18TaggedStdAllocatorIcLNS8_7MemTags11MemTagsTypeE19EEEEEPFN16rapidjson_cohtml15GenericDocumentINSE_4UTF8IcEENSE_19MemoryPoolAllocatorINSE_12CrtAllocatorEEESJ_EEiRNS8_9inspector21InspectorConsoleAgentERKNSE_12GenericValueISH_SK_EEEEESD_NS3_4hashISD_EENS1_8equal_toISD_EENS9_INS2_IKSD_SU_EELSB_19EEEE7emplaceISV_JEEENS2_INS_18templated_iteratorIPNS_8s3_entryISV_EESV_EEbEEOT_DpOT0_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN3ska8s3_tableINSt6__ndk14pairIN3csl9container12basic_stringIcNS1_11char_traitsIcEEN6cohtml18TaggedStdAllocatorIcLNS8_7MemTags11MemTagsTypeE19EEEEEPFN16rapidjson_cohtml15GenericDocumentINSE_4UTF8IcEENSE_19MemoryPoolAllocatorINSE_12CrtAllocatorEEESJ_EEiRNS8_9inspector21InspectorConsoleAgentERKNSE_12GenericValueISH_SK_EEEEESD_NS3_4hashISD_EENS1_8equal_toISD_EENS9_INS2_IKSD_SU_EELSB_19EEEE7emplaceISV_JEEENS2_INS_18templated_iteratorIPNS_8s3_entryISV_EESV_EEbEEOT_DpOT0_.
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
    log('_ZN3ska8s3_tableINSt6__ndk14pairIN3csl9container12basic_stringIcNS1_11char_traitsIcEEN6cohtml18TaggedStdAllocatorIcLNS8_7MemTags11MemTagsTypeE19EEEEEPFN16rapidjson_cohtml15GenericDocumentINSE_4UTF8IcEENSE_19MemoryPoolAllocatorINSE_12CrtAllocatorEEESJ_EEiRNS8_9inspector21InspectorConsoleAgentERKNSE_12GenericValueISH_SK_EEEEESD_NS3_4hashISD_EENS1_8equal_toISD_EENS9_INS2_IKSD_SU_EELSB_19EEEE7emplaceISV_JEEENS2_INS_18templated_iteratorIPNS_8s3_entryISV_EESV_EEbEEOT_DpOT0_()');
  },

  /**
   * Called synchronously when about to return from _ZN3ska8s3_tableINSt6__ndk14pairIN3csl9container12basic_stringIcNS1_11char_traitsIcEEN6cohtml18TaggedStdAllocatorIcLNS8_7MemTags11MemTagsTypeE19EEEEEPFN16rapidjson_cohtml15GenericDocumentINSE_4UTF8IcEENSE_19MemoryPoolAllocatorINSE_12CrtAllocatorEEESJ_EEiRNS8_9inspector21InspectorConsoleAgentERKNSE_12GenericValueISH_SK_EEEEESD_NS3_4hashISD_EENS1_8equal_toISD_EENS9_INS2_IKSD_SU_EELSB_19EEEE7emplaceISV_JEEENS2_INS_18templated_iteratorIPNS_8s3_entryISV_EESV_EEbEEOT_DpOT0_.
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
