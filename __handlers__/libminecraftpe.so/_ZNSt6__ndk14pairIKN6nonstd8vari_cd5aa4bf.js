/*
 * Auto-generated by Frida. Please modify to match the signature of _ZNSt6__ndk14pairIKN6nonstd8variants7variantI13ActorUniqueIDNS0_I8BlockPos11AutomaticIDI9DimensioniEEENS2_6detail2TXINSA_2S2EEENSB_INSA_2S3EEENSB_INSA_2S4EEENSB_INSA_2S5EEENSB_INSA_2S6EEENSB_INSA_2S7EEENSB_INSA_2S8EEENSB_INSA_2S9EEENSB_INSA_3S10EEENSB_INSA_3S11EEENSB_INSA_3S12EEENSB_INSA_3S13EEENSB_INSA_3S14EEENSB_INSA_3S15EEEEENS_10unique_ptrI35LodestoneCompassComponentCalculatorNS_14default_deleteIS17_EEEEEC2IRS15_S1A_Lb0EEEOT_OT0_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZNSt6__ndk14pairIKN6nonstd8variants7variantI13ActorUniqueIDNS0_I8BlockPos11AutomaticIDI9DimensioniEEENS2_6detail2TXINSA_2S2EEENSB_INSA_2S3EEENSB_INSA_2S4EEENSB_INSA_2S5EEENSB_INSA_2S6EEENSB_INSA_2S7EEENSB_INSA_2S8EEENSB_INSA_2S9EEENSB_INSA_3S10EEENSB_INSA_3S11EEENSB_INSA_3S12EEENSB_INSA_3S13EEENSB_INSA_3S14EEENSB_INSA_3S15EEEEENS_10unique_ptrI35LodestoneCompassComponentCalculatorNS_14default_deleteIS17_EEEEEC2IRS15_S1A_Lb0EEEOT_OT0_.
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
    log('_ZNSt6__ndk14pairIKN6nonstd8variants7variantI13ActorUniqueIDNS0_I8BlockPos11AutomaticIDI9DimensioniEEENS2_6detail2TXINSA_2S2EEENSB_INSA_2S3EEENSB_INSA_2S4EEENSB_INSA_2S5EEENSB_INSA_2S6EEENSB_INSA_2S7EEENSB_INSA_2S8EEENSB_INSA_2S9EEENSB_INSA_3S10EEENSB_INSA_3S11EEENSB_INSA_3S12EEENSB_INSA_3S13EEENSB_INSA_3S14EEENSB_INSA_3S15EEEEENS_10unique_ptrI35LodestoneCompassComponentCalculatorNS_14default_deleteIS17_EEEEEC2IRS15_S1A_Lb0EEEOT_OT0_()');
  },

  /**
   * Called synchronously when about to return from _ZNSt6__ndk14pairIKN6nonstd8variants7variantI13ActorUniqueIDNS0_I8BlockPos11AutomaticIDI9DimensioniEEENS2_6detail2TXINSA_2S2EEENSB_INSA_2S3EEENSB_INSA_2S4EEENSB_INSA_2S5EEENSB_INSA_2S6EEENSB_INSA_2S7EEENSB_INSA_2S8EEENSB_INSA_2S9EEENSB_INSA_3S10EEENSB_INSA_3S11EEENSB_INSA_3S12EEENSB_INSA_3S13EEENSB_INSA_3S14EEENSB_INSA_3S15EEEEENS_10unique_ptrI35LodestoneCompassComponentCalculatorNS_14default_deleteIS17_EEEEEC2IRS15_S1A_Lb0EEEOT_OT0_.
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
