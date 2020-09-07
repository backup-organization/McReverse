/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN6cohtml9inspector8StubTypeIMNS0_21InspectorTracingAgentEFviRKN3csl9container12basic_stringIcNSt6__ndk111char_traitsIcEENS_18TaggedStdAllocatorIcLNS_7MemTags11MemTagsTypeE19EEEEESF_iSF_EE12OnRemoteCallEiRS2_SH_RKN16rapidjson_cohtml12GenericValueINSK_4UTF8IcEENSK_19MemoryPoolAllocatorINSK_12CrtAllocatorEEEEEPKcSV_SV_SV_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN6cohtml9inspector8StubTypeIMNS0_21InspectorTracingAgentEFviRKN3csl9container12basic_stringIcNSt6__ndk111char_traitsIcEENS_18TaggedStdAllocatorIcLNS_7MemTags11MemTagsTypeE19EEEEESF_iSF_EE12OnRemoteCallEiRS2_SH_RKN16rapidjson_cohtml12GenericValueINSK_4UTF8IcEENSK_19MemoryPoolAllocatorINSK_12CrtAllocatorEEEEEPKcSV_SV_SV_.
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
    log('_ZN6cohtml9inspector8StubTypeIMNS0_21InspectorTracingAgentEFviRKN3csl9container12basic_stringIcNSt6__ndk111char_traitsIcEENS_18TaggedStdAllocatorIcLNS_7MemTags11MemTagsTypeE19EEEEESF_iSF_EE12OnRemoteCallEiRS2_SH_RKN16rapidjson_cohtml12GenericValueINSK_4UTF8IcEENSK_19MemoryPoolAllocatorINSK_12CrtAllocatorEEEEEPKcSV_SV_SV_()');
  },

  /**
   * Called synchronously when about to return from _ZN6cohtml9inspector8StubTypeIMNS0_21InspectorTracingAgentEFviRKN3csl9container12basic_stringIcNSt6__ndk111char_traitsIcEENS_18TaggedStdAllocatorIcLNS_7MemTags11MemTagsTypeE19EEEEESF_iSF_EE12OnRemoteCallEiRS2_SH_RKN16rapidjson_cohtml12GenericValueINSK_4UTF8IcEENSK_19MemoryPoolAllocatorINSK_12CrtAllocatorEEEEEPKcSV_SV_SV_.
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
