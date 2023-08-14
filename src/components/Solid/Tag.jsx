export function Tag({ name }) {
  let color
  const colorToClassMap = {
    slate: 'bg-slate-400 text-slate-900 hover:bg-gradient-to-t hover:from-slate-200 to:slate-900',
    gray: 'bg-gray-400 text-gray-900 hover:bg-gradient-to-t hover:from-gray-200 to:gray-900',
    zinc: 'bg-zinc-400 text-zinc-900 hover:bg-gradient-to-t hover:from-zinc-200 to:zinc-900',
    neutral: 'bg-neutral-400 text-neutral-900 hover:bg-gradient-to-t hover:from-neutral-200 to:neutral-900',
    stone: 'bg-stone-400 text-stone-900 hover:bg-gradient-to-t hover:from-stone-200 to:stone-900',
    red: 'bg-red-400 text-red-900 hover:bg-gradient-to-t hover:from-red-200 to:red-900',
    orange: 'bg-orange-400 text-orange-900 hover:bg-gradient-to-t hover:from-orange-200 to:orange-900',
    amber: 'bg-amber-400 text-amber-900 hover:bg-gradient-to-t hover:from-amber-200 to:amber-900',
    yellow: 'bg-yellow-400 text-yellow-900 hover:bg-gradient-to-t hover:from-yellow-200 to:yellow-900',
    lime: 'bg-lime-400 text-lime-900 hover:bg-gradient-to-t hover:from-lime-200 to:lime-900',
    green: 'bg-green-400 text-green-900 hover:bg-gradient-to-t hover:from-green-200 to:green-900',
    emerald: 'bg-emerald-400 text-emerald-900 hover:bg-gradient-to-t hover:from-emerald-200 to:emerald-900',
    teal: 'bg-teal-400 text-teal-900 hover:bg-gradient-to-t hover:from-teal-200 to:teal-900',
    cyan: 'bg-cyan-400 text-cyan-900 hover:bg-gradient-to-t hover:from-cyan-200 to:cyan-900',
    sky: 'bg-sky-400 text-sky-900 hover:bg-gradient-to-t hover:from-sky-200 to:sky-900',
    blue: 'bg-blue-400 text-blue-900 hover:bg-gradient-to-t hover:from-blue-200 to:blue-900',
    indigo: 'bg-indigo-400 text-indigo-900 hover:bg-gradient-to-t hover:from-indigo-200 to:indigo-900',
    violet: 'bg-violet-400 text-violet-900 hover:bg-gradient-to-t hover:from-violet-200 to:violet-900',
    purple: 'bg-purple-400 text-purple-900 hover:bg-gradient-to-t hover:from-purple-200 to:purple-900',
    fuchsia: 'bg-fuchsia-400 text-fuchsia-900 hover:bg-gradient-to-t hover:from-fuchsia-200 to:fuchsia-900',
    pink: 'bg-pink-400 text-pink-900 hover:bg-gradient-to-t hover:from-pink-200 to:pink-900',
    rose: 'bg-rose-400 text-rose-900 hover:bg-gradient-to-t hover:from-rose-200 to:rose-900'
  };

  switch (name) {
    case 'javascript':
      color = 'yellow'
      break;

    default:
      color = 'pink'
      break;
  }

  return (
    <a href="#" class={`rounded-md p-2 md:py-1 text-xs font-semibold ${colorToClassMap[color]} transition-all ease-in-out`}>
      {name}
    </a>
  );
}
