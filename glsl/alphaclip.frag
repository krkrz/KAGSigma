precision mediump float;
varying vec2 v_texCoord;
uniform sampler2D s_tex0;
uniform sampler2D s_tex1;
void main()
{
	vec4 s1 = texture2D( s_tex0, v_texCoord );
	float alpha = texture2D( s_tex1, v_texCoord ).a;
	gl_FragColor.rgb = s1.rgb;
	gl_FragColor.a = alpha * s1.a;
}
