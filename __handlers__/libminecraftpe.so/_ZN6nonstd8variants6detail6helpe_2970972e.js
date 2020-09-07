/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN6nonstd8variants6detail6helperIN3mce13ClientTextureENS3_10TexturePtrENS1_2TXINS1_2S2EEENS6_INS1_2S3EEENS6_INS1_2S4EEENS6_INS1_2S5EEENS6_INS1_2S6EEENS6_INS1_2S7EEENS6_INS1_2S8EEENS6_INS1_2S9EEENS6_INS1_3S10EEENS6_INS1_3S11EEENS6_INS1_3S12EEENS6_INS1_3S13EEENS6_INS1_3S14EEENS6_INS1_3S15EEEE14copy_constructEaPKvPv.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN6nonstd8variants6detail6helperIN3mce13ClientTextureENS3_10TexturePtrENS1_2TXINS1_2S2EEENS6_INS1_2S3EEENS6_INS1_2S4EEENS6_INS1_2S5EEENS6_INS1_2S6EEENS6_INS1_2S7EEENS6_INS1_2S8EEENS6_INS1_2S9EEENS6_INS1_3S10EEENS6_INS1_3S11EEENS6_INS1_3S12EEENS6_INS1_3S13EEENS6_INS1_3S14EEENS6_INS1_3S15EEEE14copy_constructEaPKvPv.
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
    log('_ZN6nonstd8variants6detail6helperIN3mce13ClientTextureENS3_10TexturePtrENS1_2TXINS1_2S2EEENS6_INS1_2S3EEENS6_INS1_2S4EEENS6_INS1_2S5EEENS6_INS1_2S6EEENS6_INS1_2S7EEENS6_INS1_2S8EEENS6_INS1_2S9EEENS6_INS1_3S10EEENS6_INS1_3S11EEENS6_INS1_3S12EEENS6_INS1_3S13EEENS6_INS1_3S14EEENS6_INS1_3S15EEEE14copy_constructEaPKvPv()');
  },

  /**
   * Called synchronously when about to return from _ZN6nonstd8variants6detail6helperIN3mce13ClientTextureENS3_10TexturePtrENS1_2TXINS1_2S2EEENS6_INS1_2S3EEENS6_INS1_2S4EEENS6_INS1_2S5EEENS6_INS1_2S6EEENS6_INS1_2S7EEENS6_INS1_2S8EEENS6_INS1_2S9EEENS6_INS1_3S10EEENS6_INS1_3S11EEENS6_INS1_3S12EEENS6_INS1_3S13EEENS6_INS1_3S14EEENS6_INS1_3S15EEEE14copy_constructEaPKvPv.
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
