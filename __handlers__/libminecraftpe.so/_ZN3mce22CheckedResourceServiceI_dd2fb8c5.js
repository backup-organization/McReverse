/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN3mce22CheckedResourceServiceINS_23resource_service_traitsIN6nonstd8variants7variantINS3_9monostateENS_6BufferENS_21ClientResourcePointerINS_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS_21ResourceBlockTemplateISB_NS_22UncheckedHandleTrackerENS9_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS7_INS8_INSA_27ResolvedIndexBufferResourceENSC_ISK_SD_SE_EESH_EEEENS3_6detail2TXINSO_2S4EEENSP_INSO_2S5EEENSP_INSO_2S6EEENSP_INSO_2S7EEENSP_INSO_2S8EEENSP_INSO_2S9EEENSP_INSO_3S10EEENSP_INSO_3S11EEENSP_INSO_3S12EEENSP_INSO_3S13EEENSP_INSO_3S14EEENSP_INSO_3S15EEEEENS_21PerFrameHandleTrackerENS_21SimpleResourceTrackerENS_33AssertResourceServiceErrorHandlerENS_28BufferResourceServiceContextEEEED2Ev.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN3mce22CheckedResourceServiceINS_23resource_service_traitsIN6nonstd8variants7variantINS3_9monostateENS_6BufferENS_21ClientResourcePointerINS_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS_21ResourceBlockTemplateISB_NS_22UncheckedHandleTrackerENS9_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS7_INS8_INSA_27ResolvedIndexBufferResourceENSC_ISK_SD_SE_EESH_EEEENS3_6detail2TXINSO_2S4EEENSP_INSO_2S5EEENSP_INSO_2S6EEENSP_INSO_2S7EEENSP_INSO_2S8EEENSP_INSO_2S9EEENSP_INSO_3S10EEENSP_INSO_3S11EEENSP_INSO_3S12EEENSP_INSO_3S13EEENSP_INSO_3S14EEENSP_INSO_3S15EEEEENS_21PerFrameHandleTrackerENS_21SimpleResourceTrackerENS_33AssertResourceServiceErrorHandlerENS_28BufferResourceServiceContextEEEED2Ev.
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
    log('_ZN3mce22CheckedResourceServiceINS_23resource_service_traitsIN6nonstd8variants7variantINS3_9monostateENS_6BufferENS_21ClientResourcePointerINS_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS_21ResourceBlockTemplateISB_NS_22UncheckedHandleTrackerENS9_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS7_INS8_INSA_27ResolvedIndexBufferResourceENSC_ISK_SD_SE_EESH_EEEENS3_6detail2TXINSO_2S4EEENSP_INSO_2S5EEENSP_INSO_2S6EEENSP_INSO_2S7EEENSP_INSO_2S8EEENSP_INSO_2S9EEENSP_INSO_3S10EEENSP_INSO_3S11EEENSP_INSO_3S12EEENSP_INSO_3S13EEENSP_INSO_3S14EEENSP_INSO_3S15EEEEENS_21PerFrameHandleTrackerENS_21SimpleResourceTrackerENS_33AssertResourceServiceErrorHandlerENS_28BufferResourceServiceContextEEEED2Ev()');
  },

  /**
   * Called synchronously when about to return from _ZN3mce22CheckedResourceServiceINS_23resource_service_traitsIN6nonstd8variants7variantINS3_9monostateENS_6BufferENS_21ClientResourcePointerINS_15ResourcePointerIN6dragon4mesh28ResolvedVertexBufferResourceENS_21ResourceBlockTemplateISB_NS_22UncheckedHandleTrackerENS9_17BufferDescriptionEEENSt6__ndk110shared_ptrEEEEENS7_INS8_INSA_27ResolvedIndexBufferResourceENSC_ISK_SD_SE_EESH_EEEENS3_6detail2TXINSO_2S4EEENSP_INSO_2S5EEENSP_INSO_2S6EEENSP_INSO_2S7EEENSP_INSO_2S8EEENSP_INSO_2S9EEENSP_INSO_3S10EEENSP_INSO_3S11EEENSP_INSO_3S12EEENSP_INSO_3S13EEENSP_INSO_3S14EEENSP_INSO_3S15EEEEENS_21PerFrameHandleTrackerENS_21SimpleResourceTrackerENS_33AssertResourceServiceErrorHandlerENS_28BufferResourceServiceContextEEEED2Ev.
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
