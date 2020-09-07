/*
 * Auto-generated by Frida. Please modify to match the signature of _ZNSt6__ndk16vectorINS_4pairINS_8weak_ptrIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS6_9monostateENS3_7TextureEN6dragon3res13ClientTextureENS6_6detail2TXINSD_2S3EEENSE_INSD_2S4EEENSE_INSD_2S5EEENSE_INSD_2S6EEENSE_INSD_2S7EEENSE_INSD_2S8EEENSE_INSD_2S9EEENSE_INSD_3S10EEENSE_INSD_3S11EEENSE_INSD_3S12EEENSE_INSD_3S13EEENSE_INSD_3S14EEENSE_INSD_3S15EEEEENS3_21PerFrameHandleTrackerENS3_33ResourceServiceTextureDescriptionEEEEENS_10unique_ptrINS3_21ITransactionContainerENS_14default_deleteIS1B_EEEEEENS_9allocatorIS1F_EEE12emplace_backIJNS1_INS_10shared_ptrIS18_EES1E_EEEEERS1F_DpOT_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZNSt6__ndk16vectorINS_4pairINS_8weak_ptrIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS6_9monostateENS3_7TextureEN6dragon3res13ClientTextureENS6_6detail2TXINSD_2S3EEENSE_INSD_2S4EEENSE_INSD_2S5EEENSE_INSD_2S6EEENSE_INSD_2S7EEENSE_INSD_2S8EEENSE_INSD_2S9EEENSE_INSD_3S10EEENSE_INSD_3S11EEENSE_INSD_3S12EEENSE_INSD_3S13EEENSE_INSD_3S14EEENSE_INSD_3S15EEEEENS3_21PerFrameHandleTrackerENS3_33ResourceServiceTextureDescriptionEEEEENS_10unique_ptrINS3_21ITransactionContainerENS_14default_deleteIS1B_EEEEEENS_9allocatorIS1F_EEE12emplace_backIJNS1_INS_10shared_ptrIS18_EES1E_EEEEERS1F_DpOT_.
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
    log('_ZNSt6__ndk16vectorINS_4pairINS_8weak_ptrIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS6_9monostateENS3_7TextureEN6dragon3res13ClientTextureENS6_6detail2TXINSD_2S3EEENSE_INSD_2S4EEENSE_INSD_2S5EEENSE_INSD_2S6EEENSE_INSD_2S7EEENSE_INSD_2S8EEENSE_INSD_2S9EEENSE_INSD_3S10EEENSE_INSD_3S11EEENSE_INSD_3S12EEENSE_INSD_3S13EEENSE_INSD_3S14EEENSE_INSD_3S15EEEEENS3_21PerFrameHandleTrackerENS3_33ResourceServiceTextureDescriptionEEEEENS_10unique_ptrINS3_21ITransactionContainerENS_14default_deleteIS1B_EEEEEENS_9allocatorIS1F_EEE12emplace_backIJNS1_INS_10shared_ptrIS18_EES1E_EEEEERS1F_DpOT_()');
  },

  /**
   * Called synchronously when about to return from _ZNSt6__ndk16vectorINS_4pairINS_8weak_ptrIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS6_9monostateENS3_7TextureEN6dragon3res13ClientTextureENS6_6detail2TXINSD_2S3EEENSE_INSD_2S4EEENSE_INSD_2S5EEENSE_INSD_2S6EEENSE_INSD_2S7EEENSE_INSD_2S8EEENSE_INSD_2S9EEENSE_INSD_3S10EEENSE_INSD_3S11EEENSE_INSD_3S12EEENSE_INSD_3S13EEENSE_INSD_3S14EEENSE_INSD_3S15EEEEENS3_21PerFrameHandleTrackerENS3_33ResourceServiceTextureDescriptionEEEEENS_10unique_ptrINS3_21ITransactionContainerENS_14default_deleteIS1B_EEEEEENS_9allocatorIS1F_EEE12emplace_backIJNS1_INS_10shared_ptrIS18_EES1E_EEEEERS1F_DpOT_.
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
