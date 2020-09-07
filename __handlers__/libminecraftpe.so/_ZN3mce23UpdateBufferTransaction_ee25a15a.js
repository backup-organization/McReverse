/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN3mce23UpdateBufferTransaction5applyERKNS_15ResourcePointerIN6nonstd8variants7variantINS3_9monostateENS_6BufferENS_21ClientResourcePointerINS1_IN6dragon4mesh28ResolvedVertexBufferResourceENS_21ResourceBlockTemplateISA_NS_22UncheckedHandleTrackerENS8_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS7_INS1_INS9_27ResolvedIndexBufferResourceENSB_ISJ_SC_SD_EESG_EEEENS3_6detail2TXINSN_2S4EEENSO_INSN_2S5EEENSO_INSN_2S6EEENSO_INSN_2S7EEENSO_INSN_2S8EEENSO_INSN_2S9EEENSO_INSN_3S10EEENSO_INSN_3S11EEENSO_INSN_3S12EEENSO_INSN_3S13EEENSO_INSN_3S14EEENSO_INSN_3S15EEEEENSB_IS1D_NS_21PerFrameHandleTrackerESD_EESG_EERNS_28BufferResourceServiceContextE.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN3mce23UpdateBufferTransaction5applyERKNS_15ResourcePointerIN6nonstd8variants7variantINS3_9monostateENS_6BufferENS_21ClientResourcePointerINS1_IN6dragon4mesh28ResolvedVertexBufferResourceENS_21ResourceBlockTemplateISA_NS_22UncheckedHandleTrackerENS8_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS7_INS1_INS9_27ResolvedIndexBufferResourceENSB_ISJ_SC_SD_EESG_EEEENS3_6detail2TXINSN_2S4EEENSO_INSN_2S5EEENSO_INSN_2S6EEENSO_INSN_2S7EEENSO_INSN_2S8EEENSO_INSN_2S9EEENSO_INSN_3S10EEENSO_INSN_3S11EEENSO_INSN_3S12EEENSO_INSN_3S13EEENSO_INSN_3S14EEENSO_INSN_3S15EEEEENSB_IS1D_NS_21PerFrameHandleTrackerESD_EESG_EERNS_28BufferResourceServiceContextE.
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
    log('_ZN3mce23UpdateBufferTransaction5applyERKNS_15ResourcePointerIN6nonstd8variants7variantINS3_9monostateENS_6BufferENS_21ClientResourcePointerINS1_IN6dragon4mesh28ResolvedVertexBufferResourceENS_21ResourceBlockTemplateISA_NS_22UncheckedHandleTrackerENS8_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS7_INS1_INS9_27ResolvedIndexBufferResourceENSB_ISJ_SC_SD_EESG_EEEENS3_6detail2TXINSN_2S4EEENSO_INSN_2S5EEENSO_INSN_2S6EEENSO_INSN_2S7EEENSO_INSN_2S8EEENSO_INSN_2S9EEENSO_INSN_3S10EEENSO_INSN_3S11EEENSO_INSN_3S12EEENSO_INSN_3S13EEENSO_INSN_3S14EEENSO_INSN_3S15EEEEENSB_IS1D_NS_21PerFrameHandleTrackerESD_EESG_EERNS_28BufferResourceServiceContextE()');
  },

  /**
   * Called synchronously when about to return from _ZN3mce23UpdateBufferTransaction5applyERKNS_15ResourcePointerIN6nonstd8variants7variantINS3_9monostateENS_6BufferENS_21ClientResourcePointerINS1_IN6dragon4mesh28ResolvedVertexBufferResourceENS_21ResourceBlockTemplateISA_NS_22UncheckedHandleTrackerENS8_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS7_INS1_INS9_27ResolvedIndexBufferResourceENSB_ISJ_SC_SD_EESG_EEEENS3_6detail2TXINSN_2S4EEENSO_INSN_2S5EEENSO_INSN_2S6EEENSO_INSN_2S7EEENSO_INSN_2S8EEENSO_INSN_2S9EEENSO_INSN_3S10EEENSO_INSN_3S11EEENSO_INSN_3S12EEENSO_INSN_3S13EEENSO_INSN_3S14EEENSO_INSN_3S15EEEEENSB_IS1D_NS_21PerFrameHandleTrackerESD_EESG_EERNS_28BufferResourceServiceContextE.
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
