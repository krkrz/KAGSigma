


/*export*/
TVP_GL_FUNC_DECL(void, TVPUnivTransBlend_d_c, (tjs_uint32 *dest, const tjs_uint32 *src1, const tjs_uint32 *src2, const tjs_uint8 *rule, const tjs_uint32 *table, tjs_int len))
{
	tjs_uint32 s1_, s2, s1, addr;
	tjs_uint32 a1, a2;
	tjs_int alpha;
	tjs_int opa;
	
	
	
	
	opa = table[*rule];
	rule++;
	s1 = *src1;
	s2 = *src2;
	a1 = s1 >> 24;
	a2 = s2 >> 24;
	addr = (a2*opa & 0xff00) + (a1*(256-opa) >> 8);
	alpha = TVPOpacityOnOpacityTable[addr];
	s1_ = s1 & 0xff00ff;
	s1_ = ((s1_ + (((s2 & 0xff00ff) - s1_) * alpha >> 8)) & 0xff00ff);
	src1++;
	src2++;
	s1 &= 0xff00;
	s2 &= 0xff00;
	s1_ |= (a1 + ((a2 - a1)*opa >> 8)) << 24;
	*dest = s1_ | ((s1 + ((s2 - s1) * alpha >> 8)) & 0xff00);
	dest++;