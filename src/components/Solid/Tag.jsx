export function Tag({ name }) {
  let color
  const colorToClassMap = {
    slate: 'bg-slate-400 text-slate-900 hover:bg-gradient-to-t hover:from-slate-200',
    gray: 'bg-gray-400 text-gray-900 hover:bg-gradient-to-t hover:from-gray-200 ',
    zinc: 'bg-zinc-400 text-zinc-900 hover:bg-gradient-to-t hover:from-zinc-200 ',
    neutral: 'bg-neutral-400 text-neutral-900 hover:bg-gradient-to-t hover:from-neutral-200 ',
    stone: 'bg-stone-400 text-stone-900 hover:bg-gradient-to-t hover:from-stone-200 ',
    red: 'bg-red-400 text-red-900 hover:bg-gradient-to-t hover:from-red-200 ',
    orange: 'bg-orange-400 text-orange-900 hover:bg-gradient-to-t hover:from-orange-200 ',
    amber: 'bg-amber-400 text-amber-900 hover:bg-gradient-to-t hover:from-amber-200 ',
    yellow: 'bg-yellow-400 text-yellow-900 hover:bg-gradient-to-t hover:from-yellow-200 ',
    lime: 'bg-lime-400 text-lime-900 hover:bg-gradient-to-t hover:from-lime-200 ',
    green: 'bg-green-400 text-green-900 hover:bg-gradient-to-t hover:from-green-200 ',
    emerald: 'bg-emerald-400 text-emerald-900 hover:bg-gradient-to-t hover:from-emerald-200 ',
    teal: 'bg-teal-400 text-teal-900 hover:bg-gradient-to-t hover:from-teal-200 ',
    cyan: 'bg-cyan-400 text-cyan-900 hover:bg-gradient-to-t hover:from-cyan-200 ',
    sky: 'bg-sky-400 text-sky-900 hover:bg-gradient-to-t hover:from-sky-200 ',
    blue: 'bg-blue-400 text-blue-900 hover:bg-gradient-to-t hover:from-blue-200 ',
    indigo: 'bg-indigo-400 text-indigo-900 hover:bg-gradient-to-t hover:from-indigo-200 ',
    violet: 'bg-violet-400 text-violet-900 hover:bg-gradient-to-t hover:from-violet-200 ',
    purple: 'bg-purple-400 text-purple-900 hover:bg-gradient-to-t hover:from-purple-200 ',
    fuchsia: 'bg-fuchsia-400 text-fuchsia-900 hover:bg-gradient-to-t hover:from-fuchsia-200 ',
    pink: 'bg-pink-400 text-pink-900 hover:bg-gradient-to-t hover:from-pink-200 ',
    rose: 'bg-rose-400 text-rose-900 hover:bg-gradient-to-t hover:from-rose-200 '
  };

  switch (name.toLowerCase()) {
    case 'javascript':
      color = 'yellow'
      break;
    case 'blog':
      color = 'stone'
      break
    case 'react':
      color = 'cyan'
      break
    case 'astro':
      color = 'slate'
      break
    case 'svelte':
      color = 'orange'
      break
    case 'vue':
      color = 'emerald'
      break
    case 'project':
      color = 'red'
      break
    case 'tailwind':
      color = 'sky'
      break
    case 'typescript':
      color = 'sky'
      break
    case 'bulma':
      color = "teal"
      break
    default:
      color = 'neutral'
      break;
  }

  return (
    <a href="#" class={`rounded-md p-2 md:py-1 text-xs font-semibold ${colorToClassMap[color]} transition-all ease-in-out`}>
      {name}
    </a>
  );
}
