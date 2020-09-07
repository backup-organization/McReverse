/*
 * Auto-generated by Frida. Please modify to match the signature of _ZNSt6__ndk16vectorINS_8functionIFvR11CompoundTagR13EntityContextR24IWorldRegistriesProviderEEENS_9allocatorIS9_EEE12emplace_backIJZN21BiomeComponentFactory20_generateNetworkSyncIJ23WeightedBiomeAttributesI19HillsTransformationESG_I25MutateBiomeTransformationE32WorldGenClimateMappingAttributes32FilteredTransformationAttributesI26PreHillsEdgeTransformationESM_I27PostShoreEdgeTransformationESG_I19RiverTransformationESG_I19ShoreTransformationEEEEvRKNS_12basic_stringIcNS_11char_traitsIcEENSA_IcEEEEEUlS3_S5_S7_E_EEERS9_DpOT_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZNSt6__ndk16vectorINS_8functionIFvR11CompoundTagR13EntityContextR24IWorldRegistriesProviderEEENS_9allocatorIS9_EEE12emplace_backIJZN21BiomeComponentFactory20_generateNetworkSyncIJ23WeightedBiomeAttributesI19HillsTransformationESG_I25MutateBiomeTransformationE32WorldGenClimateMappingAttributes32FilteredTransformationAttributesI26PreHillsEdgeTransformationESM_I27PostShoreEdgeTransformationESG_I19RiverTransformationESG_I19ShoreTransformationEEEEvRKNS_12basic_stringIcNS_11char_traitsIcEENSA_IcEEEEEUlS3_S5_S7_E_EEERS9_DpOT_.
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
    log('_ZNSt6__ndk16vectorINS_8functionIFvR11CompoundTagR13EntityContextR24IWorldRegistriesProviderEEENS_9allocatorIS9_EEE12emplace_backIJZN21BiomeComponentFactory20_generateNetworkSyncIJ23WeightedBiomeAttributesI19HillsTransformationESG_I25MutateBiomeTransformationE32WorldGenClimateMappingAttributes32FilteredTransformationAttributesI26PreHillsEdgeTransformationESM_I27PostShoreEdgeTransformationESG_I19RiverTransformationESG_I19ShoreTransformationEEEEvRKNS_12basic_stringIcNS_11char_traitsIcEENSA_IcEEEEEUlS3_S5_S7_E_EEERS9_DpOT_()');
  },

  /**
   * Called synchronously when about to return from _ZNSt6__ndk16vectorINS_8functionIFvR11CompoundTagR13EntityContextR24IWorldRegistriesProviderEEENS_9allocatorIS9_EEE12emplace_backIJZN21BiomeComponentFactory20_generateNetworkSyncIJ23WeightedBiomeAttributesI19HillsTransformationESG_I25MutateBiomeTransformationE32WorldGenClimateMappingAttributes32FilteredTransformationAttributesI26PreHillsEdgeTransformationESM_I27PostShoreEdgeTransformationESG_I19RiverTransformationESG_I19ShoreTransformationEEEEvRKNS_12basic_stringIcNS_11char_traitsIcEENSA_IcEEEEEUlS3_S5_S7_E_EEERS9_DpOT_.
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
