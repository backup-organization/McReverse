/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN3mce20TransactionContainerINS_42CreateTextureFromOwnedContainerTransactionENS_22TextureResourceServiceENS_24ImmediateExecutionPolicyEEC2ENSt6__ndk18weak_ptrINS_21ResourceBlockTemplateIN6nonstd8variants7variantINS9_9monostateENS_7TextureEN6dragon3res13ClientTextureENS9_6detail2TXINSG_2S3EEENSH_INSG_2S4EEENSH_INSG_2S5EEENSH_INSG_2S6EEENSH_INSG_2S7EEENSH_INSG_2S8EEENSH_INSG_2S9EEENSH_INSG_3S10EEENSH_INSG_3S11EEENSH_INSG_3S12EEENSH_INSG_3S13EEENSH_INSG_3S14EEENSH_INSG_3S15EEEEENS_21PerFrameHandleTrackerENS_33ResourceServiceTextureDescriptionEEEEEOS1_PNS_29TextureResourceServiceContextE.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN3mce20TransactionContainerINS_42CreateTextureFromOwnedContainerTransactionENS_22TextureResourceServiceENS_24ImmediateExecutionPolicyEEC2ENSt6__ndk18weak_ptrINS_21ResourceBlockTemplateIN6nonstd8variants7variantINS9_9monostateENS_7TextureEN6dragon3res13ClientTextureENS9_6detail2TXINSG_2S3EEENSH_INSG_2S4EEENSH_INSG_2S5EEENSH_INSG_2S6EEENSH_INSG_2S7EEENSH_INSG_2S8EEENSH_INSG_2S9EEENSH_INSG_3S10EEENSH_INSG_3S11EEENSH_INSG_3S12EEENSH_INSG_3S13EEENSH_INSG_3S14EEENSH_INSG_3S15EEEEENS_21PerFrameHandleTrackerENS_33ResourceServiceTextureDescriptionEEEEEOS1_PNS_29TextureResourceServiceContextE.
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
    log('_ZN3mce20TransactionContainerINS_42CreateTextureFromOwnedContainerTransactionENS_22TextureResourceServiceENS_24ImmediateExecutionPolicyEEC2ENSt6__ndk18weak_ptrINS_21ResourceBlockTemplateIN6nonstd8variants7variantINS9_9monostateENS_7TextureEN6dragon3res13ClientTextureENS9_6detail2TXINSG_2S3EEENSH_INSG_2S4EEENSH_INSG_2S5EEENSH_INSG_2S6EEENSH_INSG_2S7EEENSH_INSG_2S8EEENSH_INSG_2S9EEENSH_INSG_3S10EEENSH_INSG_3S11EEENSH_INSG_3S12EEENSH_INSG_3S13EEENSH_INSG_3S14EEENSH_INSG_3S15EEEEENS_21PerFrameHandleTrackerENS_33ResourceServiceTextureDescriptionEEEEEOS1_PNS_29TextureResourceServiceContextE()');
  },

  /**
   * Called synchronously when about to return from _ZN3mce20TransactionContainerINS_42CreateTextureFromOwnedContainerTransactionENS_22TextureResourceServiceENS_24ImmediateExecutionPolicyEEC2ENSt6__ndk18weak_ptrINS_21ResourceBlockTemplateIN6nonstd8variants7variantINS9_9monostateENS_7TextureEN6dragon3res13ClientTextureENS9_6detail2TXINSG_2S3EEENSH_INSG_2S4EEENSH_INSG_2S5EEENSH_INSG_2S6EEENSH_INSG_2S7EEENSH_INSG_2S8EEENSH_INSG_2S9EEENSH_INSG_3S10EEENSH_INSG_3S11EEENSH_INSG_3S12EEENSH_INSG_3S13EEENSH_INSG_3S14EEENSH_INSG_3S15EEEEENS_21PerFrameHandleTrackerENS_33ResourceServiceTextureDescriptionEEEEEOS1_PNS_29TextureResourceServiceContextE.
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
