/*
 * Auto-generated by Frida. Please modify to match the signature of _ZNSt6__ndk112__hash_tableINS_17__hash_value_typeIN6nonstd8variants7variantI13ActorUniqueIDNS_4pairI8BlockPos11AutomaticIDI9DimensioniEEENS3_6detail2TXINSC_2S2EEENSD_INSC_2S3EEENSD_INSC_2S4EEENSD_INSC_2S5EEENSD_INSC_2S6EEENSD_INSC_2S7EEENSD_INSC_2S8EEENSD_INSC_2S9EEENSD_INSC_3S10EEENSD_INSC_3S11EEENSD_INSC_3S12EEENSD_INSC_3S13EEENSD_INSC_3S14EEENSD_INSC_3S15EEEEENS_10unique_ptrI35LodestoneCompassComponentCalculatorNS_14default_deleteIS18_EEEEEENS_22__unordered_map_hasherIS16_S1C_NS_4hashIS16_EELb1EEENS_21__unordered_map_equalIS16_S1C_NS_8equal_toIS16_EELb1EEENS_9allocatorIS1C_EEE16__emplace_uniqueIRKS16_S1B_EENS_9enable_ifIXsr21__can_extract_map_keyIT_S16_NS6_IS1P_S1B_EEEE5valueENS6_INS_15__hash_iteratorIPNS_11__hash_nodeIS1C_PvEEEEbEEE4typeEOS1S_OT0_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZNSt6__ndk112__hash_tableINS_17__hash_value_typeIN6nonstd8variants7variantI13ActorUniqueIDNS_4pairI8BlockPos11AutomaticIDI9DimensioniEEENS3_6detail2TXINSC_2S2EEENSD_INSC_2S3EEENSD_INSC_2S4EEENSD_INSC_2S5EEENSD_INSC_2S6EEENSD_INSC_2S7EEENSD_INSC_2S8EEENSD_INSC_2S9EEENSD_INSC_3S10EEENSD_INSC_3S11EEENSD_INSC_3S12EEENSD_INSC_3S13EEENSD_INSC_3S14EEENSD_INSC_3S15EEEEENS_10unique_ptrI35LodestoneCompassComponentCalculatorNS_14default_deleteIS18_EEEEEENS_22__unordered_map_hasherIS16_S1C_NS_4hashIS16_EELb1EEENS_21__unordered_map_equalIS16_S1C_NS_8equal_toIS16_EELb1EEENS_9allocatorIS1C_EEE16__emplace_uniqueIRKS16_S1B_EENS_9enable_ifIXsr21__can_extract_map_keyIT_S16_NS6_IS1P_S1B_EEEE5valueENS6_INS_15__hash_iteratorIPNS_11__hash_nodeIS1C_PvEEEEbEEE4typeEOS1S_OT0_.
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
    log('_ZNSt6__ndk112__hash_tableINS_17__hash_value_typeIN6nonstd8variants7variantI13ActorUniqueIDNS_4pairI8BlockPos11AutomaticIDI9DimensioniEEENS3_6detail2TXINSC_2S2EEENSD_INSC_2S3EEENSD_INSC_2S4EEENSD_INSC_2S5EEENSD_INSC_2S6EEENSD_INSC_2S7EEENSD_INSC_2S8EEENSD_INSC_2S9EEENSD_INSC_3S10EEENSD_INSC_3S11EEENSD_INSC_3S12EEENSD_INSC_3S13EEENSD_INSC_3S14EEENSD_INSC_3S15EEEEENS_10unique_ptrI35LodestoneCompassComponentCalculatorNS_14default_deleteIS18_EEEEEENS_22__unordered_map_hasherIS16_S1C_NS_4hashIS16_EELb1EEENS_21__unordered_map_equalIS16_S1C_NS_8equal_toIS16_EELb1EEENS_9allocatorIS1C_EEE16__emplace_uniqueIRKS16_S1B_EENS_9enable_ifIXsr21__can_extract_map_keyIT_S16_NS6_IS1P_S1B_EEEE5valueENS6_INS_15__hash_iteratorIPNS_11__hash_nodeIS1C_PvEEEEbEEE4typeEOS1S_OT0_()');
  },

  /**
   * Called synchronously when about to return from _ZNSt6__ndk112__hash_tableINS_17__hash_value_typeIN6nonstd8variants7variantI13ActorUniqueIDNS_4pairI8BlockPos11AutomaticIDI9DimensioniEEENS3_6detail2TXINSC_2S2EEENSD_INSC_2S3EEENSD_INSC_2S4EEENSD_INSC_2S5EEENSD_INSC_2S6EEENSD_INSC_2S7EEENSD_INSC_2S8EEENSD_INSC_2S9EEENSD_INSC_3S10EEENSD_INSC_3S11EEENSD_INSC_3S12EEENSD_INSC_3S13EEENSD_INSC_3S14EEENSD_INSC_3S15EEEEENS_10unique_ptrI35LodestoneCompassComponentCalculatorNS_14default_deleteIS18_EEEEEENS_22__unordered_map_hasherIS16_S1C_NS_4hashIS16_EELb1EEENS_21__unordered_map_equalIS16_S1C_NS_8equal_toIS16_EELb1EEENS_9allocatorIS1C_EEE16__emplace_uniqueIRKS16_S1B_EENS_9enable_ifIXsr21__can_extract_map_keyIT_S16_NS6_IS1P_S1B_EEEE5valueENS6_INS_15__hash_iteratorIPNS_11__hash_nodeIS1C_PvEEEEbEEE4typeEOS1S_OT0_.
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
