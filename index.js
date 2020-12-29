exports.get = v => {const c = process.env.CONTEXT;if (!c) throw new Error(`CONTEXT env var missing, cannot get contextual ${v}`);const f = c.trim().replace('-', '_').toUpperCase();return process.env[`${f}_${v}`];
}
