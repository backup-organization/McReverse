/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN6nonstd8variants7variantINS0_9monostateEN3mce10TexturePtrENS3_13ClientTextureENS3_13ServerTextureENS0_6detail2TXINS7_2S4EEENS8_INS7_2S5EEENS8_INS7_2S6EEENS8_INS7_2S7EEENS8_INS7_2S8EEENS8_INS7_2S9EEENS8_INS7_3S10EEENS8_INS7_3S11EEENS8_INS7_3S12EEENS8_INS7_3S13EEENS8_INS7_3S14EEENS8_INS7_3S15EEEEC2EOS4_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN6nonstd8variants7variantINS0_9monostateEN3mce10TexturePtrENS3_13ClientTextureENS3_13ServerTextureENS0_6detail2TXINS7_2S4EEENS8_INS7_2S5EEENS8_INS7_2S6EEENS8_INS7_2S7EEENS8_INS7_2S8EEENS8_INS7_2S9EEENS8_INS7_3S10EEENS8_INS7_3S11EEENS8_INS7_3S12EEENS8_INS7_3S13EEENS8_INS7_3S14EEENS8_INS7_3S15EEEEC2EOS4_.
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
    log('_ZN6nonstd8variants7variantINS0_9monostateEN3mce10TexturePtrENS3_13ClientTextureENS3_13ServerTextureENS0_6detail2TXINS7_2S4EEENS8_INS7_2S5EEENS8_INS7_2S6EEENS8_INS7_2S7EEENS8_INS7_2S8EEENS8_INS7_2S9EEENS8_INS7_3S10EEENS8_INS7_3S11EEENS8_INS7_3S12EEENS8_INS7_3S13EEENS8_INS7_3S14EEENS8_INS7_3S15EEEEC2EOS4_()');
  },

  /**
   * Called synchronously when about to return from _ZN6nonstd8variants7variantINS0_9monostateEN3mce10TexturePtrENS3_13ClientTextureENS3_13ServerTextureENS0_6detail2TXINS7_2S4EEENS8_INS7_2S5EEENS8_INS7_2S6EEENS8_INS7_2S7EEENS8_INS7_2S8EEENS8_INS7_2S9EEENS8_INS7_3S10EEENS8_INS7_3S11EEENS8_INS7_3S12EEENS8_INS7_3S13EEENS8_INS7_3S14EEENS8_INS7_3S15EEEEC2EOS4_.
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
