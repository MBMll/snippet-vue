import{o as n,a2 as a,ac as t}from"./index-26a53937.js";const p={class:"prose prose-sm m-auto text-left"},o=t(`<h3>\u66F4\u6539\u5305\u884C\u4E3A</h3><h4>init patch-package</h4><pre class="language-bash"><code class="language-bash">
<span class="token function">npm</span> i -D patch-package

<span class="token comment"># edit /node_modules/naive-ui/es/checkbox/src/Checkbox.js</span>

npx patch-package naive-ui

</code></pre><h4>add script into package.json</h4><pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snippet&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-tsc --noEmit --skipLibCheck &amp;&amp; vite build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;postinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;patch-package&quot;</span> <span class="token comment">// new</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre><h4>install</h4><pre class="language-bash"><code class="language-bash">
<span class="token function">npm</span> <span class="token function">install</span>

</code></pre>`,7),e=[o],i={},k={setup(c,{expose:s}){return s({frontmatter:{}}),(u,l)=>(n(),a("div",p,e))}};export{k as default,i as frontmatter};
