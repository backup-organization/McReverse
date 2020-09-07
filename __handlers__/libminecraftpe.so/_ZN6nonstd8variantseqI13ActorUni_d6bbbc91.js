/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN6nonstd8variantseqI13ActorUniqueIDNSt6__ndk14pairI8BlockPos11AutomaticIDI9DimensioniEEENS0_6detail2TXINSA_2S2EEENSB_INSA_2S3EEENSB_INSA_2S4EEENSB_INSA_2S5EEENSB_INSA_2S6EEENSB_INSA_2S7EEENSB_INSA_2S8EEENSB_INSA_2S9EEENSB_INSA_3S10EEENSB_INSA_3S11EEENSB_INSA_3S12EEENSB_INSA_3S13EEENSB_INSA_3S14EEENSB_INSA_3S15EEEEEbRKNS0_7variantIT_T0_T1_T2_T3_T4_T5_T6_T7_T8_T9_T10_T11_T12_T13_T14_EES1N_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN6nonstd8variantseqI13ActorUniqueIDNSt6__ndk14pairI8BlockPos11AutomaticIDI9DimensioniEEENS0_6detail2TXINSA_2S2EEENSB_INSA_2S3EEENSB_INSA_2S4EEENSB_INSA_2S5EEENSB_INSA_2S6EEENSB_INSA_2S7EEENSB_INSA_2S8EEENSB_INSA_2S9EEENSB_INSA_3S10EEENSB_INSA_3S11EEENSB_INSA_3S12EEENSB_INSA_3S13EEENSB_INSA_3S14EEENSB_INSA_3S15EEEEEbRKNS0_7variantIT_T0_T1_T2_T3_T4_T5_T6_T7_T8_T9_T10_T11_T12_T13_T14_EES1N_.
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
    log('_ZN6nonstd8variantseqI13ActorUniqueIDNSt6__ndk14pairI8BlockPos11AutomaticIDI9DimensioniEEENS0_6detail2TXINSA_2S2EEENSB_INSA_2S3EEENSB_INSA_2S4EEENSB_INSA_2S5EEENSB_INSA_2S6EEENSB_INSA_2S7EEENSB_INSA_2S8EEENSB_INSA_2S9EEENSB_INSA_3S10EEENSB_INSA_3S11EEENSB_INSA_3S12EEENSB_INSA_3S13EEENSB_INSA_3S14EEENSB_INSA_3S15EEEEEbRKNS0_7variantIT_T0_T1_T2_T3_T4_T5_T6_T7_T8_T9_T10_T11_T12_T13_T14_EES1N_()');
  },

  /**
   * Called synchronously when about to return from _ZN6nonstd8variantseqI13ActorUniqueIDNSt6__ndk14pairI8BlockPos11AutomaticIDI9DimensioniEEENS0_6detail2TXINSA_2S2EEENSB_INSA_2S3EEENSB_INSA_2S4EEENSB_INSA_2S5EEENSB_INSA_2S6EEENSB_INSA_2S7EEENSB_INSA_2S8EEENSB_INSA_2S9EEENSB_INSA_3S10EEENSB_INSA_3S11EEENSB_INSA_3S12EEENSB_INSA_3S13EEENSB_INSA_3S14EEENSB_INSA_3S15EEEEEbRKNS0_7variantIT_T0_T1_T2_T3_T4_T5_T6_T7_T8_T9_T10_T11_T12_T13_T14_EES1N_.
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
