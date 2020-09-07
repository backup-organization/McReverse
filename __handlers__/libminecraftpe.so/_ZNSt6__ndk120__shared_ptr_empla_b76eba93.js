/*
 * Auto-generated by Frida. Please modify to match the signature of _ZNSt6__ndk120__shared_ptr_emplaceIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS4_9monostateENS1_6BufferENS1_21ClientResourcePointerINS1_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS2_ISC_NS1_22UncheckedHandleTrackerENSA_17BufferDescriptionEEENS_10shared_ptrEEEEENS8_INS9_INSB_27ResolvedIndexBufferResourceENS2_ISJ_SD_SE_EESG_EEEENS4_6detail2TXINSN_2S4EEENSO_INSN_2S5EEENSO_INSN_2S6EEENSO_INSN_2S7EEENSO_INSN_2S8EEENSO_INSN_2S9EEENSO_INSN_3S10EEENSO_INSN_3S11EEENSO_INSN_3S12EEENSO_INSN_3S13EEENSO_INSN_3S14EEENSO_INSN_3S15EEEEENS1_21PerFrameHandleTrackerESE_EENS_9allocatorIS1F_EEED2Ev.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZNSt6__ndk120__shared_ptr_emplaceIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS4_9monostateENS1_6BufferENS1_21ClientResourcePointerINS1_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS2_ISC_NS1_22UncheckedHandleTrackerENSA_17BufferDescriptionEEENS_10shared_ptrEEEEENS8_INS9_INSB_27ResolvedIndexBufferResourceENS2_ISJ_SD_SE_EESG_EEEENS4_6detail2TXINSN_2S4EEENSO_INSN_2S5EEENSO_INSN_2S6EEENSO_INSN_2S7EEENSO_INSN_2S8EEENSO_INSN_2S9EEENSO_INSN_3S10EEENSO_INSN_3S11EEENSO_INSN_3S12EEENSO_INSN_3S13EEENSO_INSN_3S14EEENSO_INSN_3S15EEEEENS1_21PerFrameHandleTrackerESE_EENS_9allocatorIS1F_EEED2Ev.
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
    log('_ZNSt6__ndk120__shared_ptr_emplaceIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS4_9monostateENS1_6BufferENS1_21ClientResourcePointerINS1_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS2_ISC_NS1_22UncheckedHandleTrackerENSA_17BufferDescriptionEEENS_10shared_ptrEEEEENS8_INS9_INSB_27ResolvedIndexBufferResourceENS2_ISJ_SD_SE_EESG_EEEENS4_6detail2TXINSN_2S4EEENSO_INSN_2S5EEENSO_INSN_2S6EEENSO_INSN_2S7EEENSO_INSN_2S8EEENSO_INSN_2S9EEENSO_INSN_3S10EEENSO_INSN_3S11EEENSO_INSN_3S12EEENSO_INSN_3S13EEENSO_INSN_3S14EEENSO_INSN_3S15EEEEENS1_21PerFrameHandleTrackerESE_EENS_9allocatorIS1F_EEED2Ev()');
  },

  /**
   * Called synchronously when about to return from _ZNSt6__ndk120__shared_ptr_emplaceIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS4_9monostateENS1_6BufferENS1_21ClientResourcePointerINS1_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS2_ISC_NS1_22UncheckedHandleTrackerENSA_17BufferDescriptionEEENS_10shared_ptrEEEEENS8_INS9_INSB_27ResolvedIndexBufferResourceENS2_ISJ_SD_SE_EESG_EEEENS4_6detail2TXINSN_2S4EEENSO_INSN_2S5EEENSO_INSN_2S6EEENSO_INSN_2S7EEENSO_INSN_2S8EEENSO_INSN_2S9EEENSO_INSN_3S10EEENSO_INSN_3S11EEENSO_INSN_3S12EEENSO_INSN_3S13EEENSO_INSN_3S14EEENSO_INSN_3S15EEEEENS1_21PerFrameHandleTrackerESE_EENS_9allocatorIS1F_EEED2Ev.
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
