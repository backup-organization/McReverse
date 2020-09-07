/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS2_9monostateENS_6BufferENS_21ClientResourcePointerINS_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS0_ISA_NS_22UncheckedHandleTrackerENS8_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS6_INS7_INS9_27ResolvedIndexBufferResourceENS0_ISI_SB_SC_EESF_EEEENS2_6detail2TXINSM_2S4EEENSN_INSM_2S5EEENSN_INSM_2S6EEENSN_INSM_2S7EEENSN_INSM_2S8EEENSN_INSM_2S9EEENSN_INSM_3S10EEENSN_INSM_3S11EEENSN_INSM_3S12EEENSN_INSM_3S13EEENSN_INSM_3S14EEENSN_INSM_3S15EEEEENS_21PerFrameHandleTrackerESC_E13resetValidityEv.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS2_9monostateENS_6BufferENS_21ClientResourcePointerINS_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS0_ISA_NS_22UncheckedHandleTrackerENS8_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS6_INS7_INS9_27ResolvedIndexBufferResourceENS0_ISI_SB_SC_EESF_EEEENS2_6detail2TXINSM_2S4EEENSN_INSM_2S5EEENSN_INSM_2S6EEENSN_INSM_2S7EEENSN_INSM_2S8EEENSN_INSM_2S9EEENSN_INSM_3S10EEENSN_INSM_3S11EEENSN_INSM_3S12EEENSN_INSM_3S13EEENSN_INSM_3S14EEENSN_INSM_3S15EEEEENS_21PerFrameHandleTrackerESC_E13resetValidityEv.
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
    log('_ZN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS2_9monostateENS_6BufferENS_21ClientResourcePointerINS_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS0_ISA_NS_22UncheckedHandleTrackerENS8_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS6_INS7_INS9_27ResolvedIndexBufferResourceENS0_ISI_SB_SC_EESF_EEEENS2_6detail2TXINSM_2S4EEENSN_INSM_2S5EEENSN_INSM_2S6EEENSN_INSM_2S7EEENSN_INSM_2S8EEENSN_INSM_2S9EEENSN_INSM_3S10EEENSN_INSM_3S11EEENSN_INSM_3S12EEENSN_INSM_3S13EEENSN_INSM_3S14EEENSN_INSM_3S15EEEEENS_21PerFrameHandleTrackerESC_E13resetValidityEv()');
  },

  /**
   * Called synchronously when about to return from _ZN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS2_9monostateENS_6BufferENS_21ClientResourcePointerINS_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS0_ISA_NS_22UncheckedHandleTrackerENS8_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS6_INS7_INS9_27ResolvedIndexBufferResourceENS0_ISI_SB_SC_EESF_EEEENS2_6detail2TXINSM_2S4EEENSN_INSM_2S5EEENSN_INSM_2S6EEENSN_INSM_2S7EEENSN_INSM_2S8EEENSN_INSM_2S9EEENSN_INSM_3S10EEENSN_INSM_3S11EEENSN_INSM_3S12EEENSN_INSM_3S13EEENSN_INSM_3S14EEENSN_INSM_3S15EEEEENS_21PerFrameHandleTrackerESC_E13resetValidityEv.
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
