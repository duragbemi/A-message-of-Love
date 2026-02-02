;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="34dec730-0733-587a-e8a3-40779337ddb9")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,111331,e=>{"use strict";var t=e.i(478902),a=e.i(902858),n=e.i(847498),r=e.i(463333),i=e.i(680576),s=e.i(636047),o=e.i(809323),l=e.i(265100),c=e.i(543851),d=e.i(971131),_=e.i(837710),p=e.i(48189);let E=()=>{let e=(0,p.getModKeyLabel)(),a=(0,s.useTableEditorStateSnapshot)(),E=(0,r.useIsQueueOperationsEnabled)(),{handleSave:m}=(0,n.useOperationQueueActions)();!function(){let e=(0,r.useIsQueueOperationsEnabled)(),t=(0,s.useTableEditorStateSnapshot)(),{handleSave:a}=(0,n.useOperationQueueActions)(),o="saving"===t.operationQueue.status,l=t.hasPendingOperations,c=e&&l;(0,i.useHotKey)(e=>{e.preventDefault(),e.stopPropagation(),!o&&l&&a()},"s",{enabled:c}),(0,i.useHotKey)(e=>{e.preventDefault(),e.stopPropagation(),t.toggleViewOperationQueue()},".",{enabled:c})}();let u=a.operationQueue.operations.length,N="saving"===a.operationQueue.status,b=a.sidePanel?.type==="operation-queue",g=E&&a.hasPendingOperations&&!b,v=(0,t.jsx)(o.AnimatePresence,{children:g&&(0,t.jsx)(l.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.2},className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-50",children:(0,t.jsxs)("div",{className:"flex items-center gap-8 px-4 py-3 bg-surface-100 border rounded-lg shadow-lg",children:[(0,t.jsxs)("span",{className:"text-sm text-foreground",children:[u," pending change",1!==u?"s":""]}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsxs)("button",{onClick:()=>a.toggleViewOperationQueue(),className:"text-foreground-light hover:text-foreground transition-colors flex items-center","aria-label":"View Details",children:[(0,t.jsx)(c.Eye,{size:14}),(0,t.jsx)("span",{className:"text-foreground-lighter text-[10px] ml-1",children:`${e}.`})]}),(0,t.jsxs)(_.Button,{size:"tiny",type:"primary",onClick:m,disabled:N,loading:N,children:["Save",(0,t.jsx)("span",{className:"text-foreground-lighter text-[10px] ml-1",children:`${e}S`})]})]})]})})});return"undefined"!=typeof document&&document.body?(0,d.createPortal)(v,document.body):null};var m=e.i(693241),u=e.i(2579),N=e.i(825713);e.s(["TableEditorLayout",0,({children:e})=>{let{can:n,isSuccess:r}=(0,u.useAsyncCheckPermissions)(a.PermissionAction.TENANT_SQL_ADMIN_READ,"tables");return r&&!n?(0,t.jsx)(N.ProjectLayoutWithAuth,{isBlocking:!1,children:(0,t.jsx)(m.default,{isFullPage:!0,resourceText:"view tables from this project"})}):(0,t.jsxs)(t.Fragment,{children:[e,(0,t.jsx)(E,{})]})}],111331)},73011,e=>{"use strict";var t=e.i(478902),a=e.i(389959);e.i(128328);var n=e.i(158639),r=e.i(188698),i=e.i(150671),s=e.i(70756),o=e.i(48189),l=e.i(908937),c=e.i(201461),d=e.i(837710),_=e.i(843778),p=e.i(672044),E=e.i(253214),m=e.i(500850),u=e.i(283606),N=e.i(314805),b=e.i(408279),g=e.i(710483);e.s(["ExportDialog",0,({table:e,filters:v=[],sorts:h=[],ignoreRoleImpersonation:T=!1,open:I,onOpenChange:f})=>{let{ref:x}=(0,n.useParams)(),S=(0,c.useRoleImpersonationStateSnapshot)(),[y,A]=(0,a.useState)("csv"),{data:R}=(0,i.useReadReplicasQuery)({projectRef:x}),O=(R??[]).find(e=>e.identifier===x),L=(0,o.pluckObjectFields)(O||{db_user:"",db_host:"",db_port:"",db_name:""},["db_host","db_name","db_port","db_user","inserted_at"]),{db_host:F,db_port:D,db_user:C,db_name:w}=L,H=(0,r.getConnectionStrings)({connectionInfo:L,metadata:{projectRef:x},poolingInfo:{connectionString:"",db_host:"",db_name:"",db_port:0,db_user:""}}),j=`${e?.name}_rows`,k=e?(0,s.getAllTableRowsSql)({table:e,sorts:h,filters:v}):void 0,P=(k?T?k.sql.toSql():(0,l.wrapWithRoleImpersonation)(k.sql.toSql(),S):"").replace(/;\s*$/,""),U=`
${H.direct.psql} -c "COPY (${P}) TO STDOUT WITH CSV HEADER DELIMITER ',';" > ${j}.csv`.trim(),Y=`
pg_dump -h ${F} -p ${D} -d ${w} -U ${C} --table="${e?.schema}.${e?.name}" --data-only --column-inserts > ${j}.sql
  `.trim();return(0,t.jsx)(E.Dialog,{open:I,onOpenChange:f,children:(0,t.jsxs)(E.DialogContent,{children:[(0,t.jsx)(E.DialogHeader,{children:(0,t.jsx)(E.DialogTitle,{children:"Export table data via CLI"})}),(0,t.jsx)(E.DialogSectionSeparator,{}),(0,t.jsxs)(E.DialogSection,{className:"flex flex-col gap-y-4",children:[(0,t.jsxs)("p",{className:"text-sm",children:["We highly recommend using ",(0,t.jsx)("code",{children:"csv"===y?"psql":"pg_dump"})," to export your table data, in particular if your table is relatively large. This can be done via the following command that you can run in your terminal:"]}),(0,t.jsxs)(m.Tabs_Shadcn_,{value:y,onValueChange:A,children:[(0,t.jsxs)(N.TabsList_Shadcn_,{className:"gap-x-3",children:[(0,t.jsx)(b.TabsTrigger_Shadcn_,{value:"csv",children:"As CSV"}),(0,t.jsx)(b.TabsTrigger_Shadcn_,{value:"sql",children:"As SQL"})]}),(0,t.jsx)(u.TabsContent_Shadcn_,{value:"csv",children:(0,t.jsx)(p.CodeBlock,{hideLineNumbers:!0,wrapperClassName:(0,_.cn)("[&_pre]:px-4 [&_pre]:py-3"),language:"bash",value:U,className:"[&_code]:text-[12px] [&_code]:text-foreground"})}),(0,t.jsxs)(u.TabsContent_Shadcn_,{value:"sql",children:[(0,t.jsx)(p.CodeBlock,{hideLineNumbers:!0,wrapperClassName:(0,_.cn)("[&_pre]:px-4 [&_pre]:py-3"),language:"bash",value:Y,className:"[&_code]:text-[12px] [&_code]:text-foreground"}),(0,t.jsx)(g.Admonition,{type:"note",className:"mt-2",title:"Filters are not supported when exporting as SQL via pg_dump",description:"If you'd like to export as SQL, we recommend creating a view first then exporting the data from there via pg_dump instead"})]})]}),(0,t.jsxs)("p",{className:"text-sm",children:["You will be prompted for your database password, and the output file"," ",(0,t.jsxs)("code",{children:[j,".",y]})," ","will be saved in the current directory that your terminal is in."]}),"sql"===y&&(0,t.jsxs)("p",{className:"text-sm text-foreground-light",children:["Note: ",(0,t.jsx)("code",{children:"pg_dump"})," needs to match your project's Postgres version. If you run into a server version mismatch error, you will need to update ",(0,t.jsx)("code",{children:"pg_dump"})," ","before running the command."]})]}),(0,t.jsx)(E.DialogFooter,{children:(0,t.jsx)(d.Button,{type:"default",onClick:()=>f(!1),children:"Close"})})]})})}])},503348,e=>{"use strict";let t=()=>{let e=Math.random().toString(36).substring(2,15);return`$x${e}$`},a=e=>{let n="ARRAY[";return e.forEach((r,i)=>{Array.isArray(r)?n+=a(r):"string"==typeof r?n+=`"${r.replace(/"/g,'""')}"`:r&&"object"==typeof r?n+=`${(e=>{let a=t(),n=0;for(;e.includes(a);){if(n>=100)throw Error("Unable to generate a unique dollar-quote tag after multiple attempts.");n++,a=t()}return`${a}${e}${a}`})(JSON.stringify(r))}::json`:n+=`${r}`,i<e.length-1&&(n+=",")}),n+="]"};e.s(["formatTableRowsToSQL",0,(e,t)=>{if(0===t.length)return"";let n=e.columns.map(e=>`"${e.name}"`).join(", "),r=t.map(t=>{let n={...t};"idx"in n&&delete n.idx;let r=Object.entries(n).map(([t,n])=>{let{dataType:r,format:i}=e.columns.find(e=>e.name===t)??{};if(null===n)return"null";if("ARRAY"===r){let e=Array.isArray(n)?n:JSON.parse(n);return`${a(e)}`}return i?.includes("json")?`${JSON.stringify(n).replace(/\\"/g,'"').replace(/'/g,"''").replace('"',"'").replace(/.$/,"'")}`:"string"==typeof i&&"string"==typeof n&&["text","varchar"].includes(i)?`'${n.replaceAll("'","''")}'`:`'${n}'`});return`(${r.join(", ")})`}).join(", ");return`INSERT INTO "${e.schema}"."${e.name}" (${n}) VALUES ${r};`},"getEntityLintDetails",0,(e,t,a,n,r)=>{let i=n?.find(n=>n?.metadata?.name===e&&n?.metadata?.schema===r&&n?.name===t&&a.includes(n?.level))||null;return{hasLint:null!==i,count:+!!i,matchingLint:i}}])},487164,e=>{"use strict";var t=e.i(242882),a=e.i(714403);let n=(0,e.i(305015).default)(`
      DROP TYPE IF EXISTS pg_temp.tabledefs CASCADE;
      CREATE TYPE pg_temp.tabledefs AS ENUM ('PKEY_INTERNAL','PKEY_EXTERNAL','FKEYS_INTERNAL', 'FKEYS_EXTERNAL', 'COMMENTS', 'FKEYS_NONE', 'INCLUDE_TRIGGERS', 'NO_TRIGGERS');

      -- SELECT * FROM pg_temp.pg_get_coldef('sample','orders','id');
      -- DROP FUNCTION pg_temp.pg_get_coldef(text,text,text,boolean);
      CREATE OR REPLACE FUNCTION pg_temp.pg_get_coldef(
        in_schema text,
        in_table  text,
        in_column text,
        oldway    boolean default False
      )
      RETURNS text
      LANGUAGE plpgsql VOLATILE
      AS
      $$
      DECLARE
      v_coldef     text;
      v_dt1        text;
      v_dt2        text;
      v_dt3        text;
      v_nullable   boolean;
      v_position   int;
      v_identity   text;
      v_generated  text;
      v_hasdflt    boolean;
      v_dfltexpr   text;

      BEGIN
        IF oldway THEN
          SELECT pg_catalog.format_type(a.atttypid, a.atttypmod) INTO v_coldef FROM pg_namespace n, pg_class c, pg_attribute a, pg_type t
          WHERE n.nspname = in_schema AND n.oid = c.relnamespace AND c.relname = in_table AND a.attname = in_column and a.attnum > 0 AND a.attrelid = c.oid AND a.atttypid = t.oid ORDER BY a.attnum;
          -- RAISE NOTICE 'DEBUG: oldway=%',v_coldef;
        ELSE
          -- a.attrelid::regclass::text, a.attname
          SELECT CASE WHEN a.atttypid = ANY ('{int,int8,int2}'::regtype[]) AND EXISTS (SELECT FROM pg_attrdef ad WHERE ad.adrelid = a.attrelid AND ad.adnum   = a.attnum AND
          pg_get_expr(ad.adbin, ad.adrelid) = 'nextval(''' || (pg_get_serial_sequence (a.attrelid::regclass::text, a.attname))::regclass || '''::regclass)') THEN CASE a.atttypid
          WHEN 'int'::regtype  THEN 'serial' WHEN 'int8'::regtype THEN 'bigserial' WHEN 'int2'::regtype THEN 'smallserial' END ELSE format_type(a.atttypid, a.atttypmod) END AS data_type
          INTO v_coldef FROM pg_namespace n, pg_class c, pg_attribute a, pg_type t
          WHERE n.nspname = in_schema AND n.oid = c.relnamespace AND c.relname = in_table AND a.attname = in_column and a.attnum > 0 AND a.attrelid = c.oid AND a.atttypid = t.oid ORDER BY a.attnum;
          -- RAISE NOTICE 'DEBUG: newway=%',v_coldef;

          -- Issue#24: not implemented yet
          -- might replace with this below to do more detailed parsing...
          -- SELECT a.atttypid::regtype AS dt1, format_type(a.atttypid, a.atttypmod) as dt2, t.typname as dt3, CASE WHEN not(a.attnotnull) THEN True ELSE False END AS nullable,
          -- a.attnum, a.attidentity, a.attgenerated, a.atthasdef, pg_get_expr(ad.adbin, ad.adrelid) dfltexpr
          -- INTO v_dt1, v_dt2, v_dt3, v_nullable, v_position, v_identity, v_generated, v_hasdflt, v_dfltexpr
          -- FROM pg_attribute a JOIN pg_class c ON (a.attrelid = c.oid) JOIN pg_type t ON (a.atttypid = t.oid) LEFT JOIN pg_attrdef ad ON (a.attrelid = ad.adrelid AND a.attnum = ad.adnum)
          -- WHERE c.relkind in ('r','p') AND a.attnum > 0 AND NOT a.attisdropped AND c.relnamespace::regnamespace::text = in_schema AND c.relname = in_table AND a.attname = in_column;
          -- RAISE NOTICE 'schema=%  table=%  column=%  dt1=%  dt2=%  dt3=%  nullable=%  pos=%  identity=%   generated=%  HasDefault=%  DeftExpr=%', in_schema, in_table, in_column, v_dt1,v_dt2,v_dt3,v_nullable,v_position,v_identity,v_generated,v_hasdflt,v_dfltexpr;
        END IF;
        RETURN v_coldef;
      END;
      $$;

      -- SELECT * FROM pg_temp.pg_get_tabledef('sample', 'address', false);
      DROP FUNCTION IF EXISTS pg_temp.pg_get_tabledef(character varying,character varying,boolean,tabledefs[]);
      CREATE OR REPLACE FUNCTION pg_temp.pg_get_tabledef(
        in_schema varchar,
        in_table varchar,
        _verbose boolean,
        VARIADIC arr pg_temp.tabledefs[] DEFAULT '{}':: pg_temp.tabledefs[]
      )
      RETURNS text
      LANGUAGE plpgsql VOLATILE
      AS
      $$
        DECLARE
          v_qualified text := '';
          v_table_ddl text;
          v_table_oid int;
          v_colrec record;
          v_constraintrec record;
          v_trigrec       record;
          v_indexrec record;
          v_rec           record;
          v_constraint_name text;
          v_constraint_def  text;
          v_pkey_def        text := '';
          v_fkey_def        text := '';
          v_fkey_defs       text := '';
          v_trigger text := '';
          v_partition_key text := '';
          v_partbound text;
          v_parent text;
          v_parent_schema text;
          v_persist text;
          v_temp  text := '';
          v_temp2 text;
          v_relopts text;
          v_tablespace text;
          v_pgversion int;
          bSerial boolean;
          bPartition boolean;
          bInheritance boolean;
          bRelispartition boolean;
          constraintarr text[] := '{}';
          constraintelement text;
          bSkip boolean;
          bVerbose boolean := False;
          v_cnt1   integer;
          v_cnt2   integer;
          search_path_old text := '';
          search_path_new text := '';
          v_partial    boolean;
          v_pos        integer;

          -- assume defaults for ENUMs at the getgo
          pkcnt            int := 0;
          fkcnt            int := 0;
          trigcnt          int := 0;
          cmtcnt           int := 0;
          pktype           pg_temp.tabledefs := 'PKEY_INTERNAL';
          fktype           pg_temp.tabledefs := 'FKEYS_INTERNAL';
          trigtype         pg_temp.tabledefs := 'NO_TRIGGERS';
          arglen           integer;
          vargs            text;
          avarg            pg_temp.tabledefs;

          -- exception variables
          v_ret            text;
          v_diag1          text;
          v_diag2          text;
          v_diag3          text;
          v_diag4          text;
          v_diag5          text;
          v_diag6          text;

        BEGIN
          SET client_min_messages = 'notice';
          IF _verbose THEN bVerbose = True; END IF;

          -- v17 fix: handle case-sensitive
          -- v_qualified = in_schema || '.' || in_table;

          arglen := array_length($4, 1);
          IF arglen IS NULL THEN
              -- nothing to do, so assume defaults
              NULL;
          ELSE
              -- loop thru args
              -- IF 'NO_TRIGGERS' = ANY ($4)
              -- select array_to_string($4, ',', '***') INTO vargs;
              IF bVerbose THEN RAISE NOTICE 'arguments=%', $4; END IF;
              FOREACH avarg IN ARRAY $4 LOOP
                  IF bVerbose THEN RAISE NOTICE 'arg=%', avarg; END IF;
                  IF avarg = 'FKEYS_INTERNAL' OR avarg = 'FKEYS_EXTERNAL' OR avarg = 'FKEYS_NONE' THEN
                      fkcnt = fkcnt + 1;
                      fktype = avarg;
                  ELSEIF avarg = 'INCLUDE_TRIGGERS' OR avarg = 'NO_TRIGGERS' THEN
                      trigcnt = trigcnt + 1;
                      trigtype = avarg;
                  ELSEIF avarg = 'PKEY_EXTERNAL' THEN
                      pkcnt = pkcnt + 1;
                      pktype = avarg;
                  ELSEIF avarg = 'COMMENTS' THEN
                      cmtcnt = cmtcnt + 1;

                  END IF;
              END LOOP;
              IF fkcnt > 1 THEN
                  RAISE WARNING 'Only one foreign key option can be provided. You provided %', fkcnt;
                  RETURN '';
              ELSEIF trigcnt > 1 THEN
                  RAISE WARNING 'Only one trigger option can be provided. You provided %', trigcnt;
                  RETURN '';
              ELSEIF pkcnt > 1 THEN
                  RAISE WARNING 'Only one pkey option can be provided. You provided %', pkcnt;
                  RETURN '';
              ELSEIF cmtcnt > 1 THEN
                  RAISE WARNING 'Only one comments option can be provided. You provided %', cmtcnt;
                  RETURN '';

              END IF;
          END IF;

          SELECT c.oid, (select setting from pg_settings where name = 'server_version_num') INTO v_table_oid, v_pgversion FROM pg_catalog.pg_class c LEFT JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
          WHERE c.relkind in ('r','p') AND c.relname = in_table AND n.nspname = in_schema;

        -- set search_path = public before we do anything to force explicit schema qualification but dont forget to set it back before exiting...
          SELECT setting INTO search_path_old FROM pg_settings WHERE name = 'search_path';

          -- RAISE NOTICE 'DEBUG tableddl: saving old search_path: ***%***', search_path_old;
          EXECUTE 'SET search_path = "public"';
          SELECT setting INTO search_path_new FROM pg_settings WHERE name = 'search_path';
          -- RAISE NOTICE 'DEBUG tableddl: using new search path=***%***', search_path_new;

          -- throw an error if table was not found
          IF (v_table_oid IS NULL) THEN
            RAISE EXCEPTION 'table does not exist';
          END IF;

          -- get user-defined tablespaces if applicable
          SELECT tablespace INTO v_temp FROM pg_tables WHERE schemaname = in_schema and tablename = in_table and tablespace IS NOT NULL;
          IF v_temp IS NULL THEN
            v_tablespace := 'TABLESPACE pg_default';
          ELSE
            v_tablespace := 'TABLESPACE ' || v_temp;
          END IF;

          -- also see if there are any SET commands for this table, ie, autovacuum_enabled=off, fillfactor=70
          WITH relopts AS (SELECT unnest(c.reloptions) relopts FROM pg_class c, pg_namespace n WHERE n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table)
          SELECT string_agg(r.relopts, ', ') as relopts INTO v_temp from relopts r;
          IF v_temp IS NULL THEN
            v_relopts := '';
          ELSE
            v_relopts := ' WITH (' || v_temp || ')';
          END IF;

          -- -----------------------------------------------------------------------------------
          -- Create table defs for partitions/children using inheritance or declarative methods.
          -- inheritance: pg_class.relkind = 'r'   pg_class.relispartition=false   pg_class.relpartbound is NULL
          -- declarative: pg_class.relkind = 'r'   pg_class.relispartition=true    pg_class.relpartbound is NOT NULL
          -- -----------------------------------------------------------------------------------
          v_partbound := '';
          bPartition := False;
          bInheritance := False;
          IF v_pgversion < 100000 THEN
            -- Issue#11: handle parent schema
            SELECT c2.relname parent, c2.relnamespace::regnamespace INTO v_parent, v_parent_schema from pg_class c1, pg_namespace n, pg_inherits i, pg_class c2
            WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.oid = i.inhrelid and i.inhparent = c2.oid and c1.relkind = 'r';
            IF (v_parent IS NOT NULL) THEN
              bPartition   := True;
              bInheritance := True;
            END IF;
          ELSE
            -- Issue#11: handle parent schema
            SELECT c2.relname parent, c1.relispartition, pg_get_expr(c1.relpartbound, c1.oid, true), c2.relnamespace::regnamespace INTO v_parent, bRelispartition, v_partbound, v_parent_schema from pg_class c1, pg_namespace n, pg_inherits i, pg_class c2
            WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.oid = i.inhrelid and i.inhparent = c2.oid and c1.relkind = 'r';
            IF (v_parent IS NOT NULL) THEN
              bPartition   := True;
              IF bRelispartition THEN
                bInheritance := False;
              ELSE
                bInheritance := True;
              END IF;
            END IF;
          END IF;
          IF bPartition THEN
            --Issue#17 fix for case-sensitive tables
            -- SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
            -- WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = quote_ident(in_schema) AND t.table_name = quote_ident(in_table) AND t.table_type = 'BASE TABLE');
            SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
            WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = in_schema AND t.table_name = in_table AND t.table_type = 'BASE TABLE');

            --Issue#19 put double-quotes around SQL keyword column names
            -- Issue#121: fix keyword lookup for table name not column name that does not apply here
            -- SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = v_colrec.column_name AND catcode = 'R';
            SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = in_table AND catcode = 'R';

            IF bInheritance THEN
              -- inheritance-based
              IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
                v_table_ddl := 'CREATE TABLE ' || in_schema || '."' || in_table || '"( '|| E'\\n';
              ELSE
                v_table_ddl := 'CREATE TABLE ' || in_schema || '.' || in_table || '( '|| E'\\n';
              END IF;

              -- Jump to constraints section to add the check constraints
            ELSE
              -- declarative-based
              IF v_relopts <> '' THEN
                IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
                  v_table_ddl := 'CREATE TABLE ' || in_schema || '."' || in_table || '" PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || v_relopts || ' ' || v_tablespace || '; ' || E'\\n';
                ELSE
                  v_table_ddl := 'CREATE TABLE ' || in_schema || '.' || in_table || ' PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || v_relopts || ' ' || v_tablespace || '; ' || E'\\n';
                END IF;
              ELSE
                IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
                  v_table_ddl := 'CREATE TABLE ' || in_schema || '."' || in_table || '" PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || ' ' || v_tablespace || '; ' || E'\\n';
                ELSE
                  v_table_ddl := 'CREATE TABLE ' || in_schema || '.' || in_table || ' PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || ' ' || v_tablespace || '; ' || E'\\n';
                END IF;
              END IF;
              -- Jump to constraints and index section to add the check constraints and indexes and perhaps FKeys
            END IF;
          END IF;
          IF bVerbose THEN RAISE NOTICE '(1)tabledef so far: %', v_table_ddl; END IF;

          IF NOT bPartition THEN
            -- see if this is unlogged or temporary table
            select c.relpersistence into v_persist from pg_class c, pg_namespace n where n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table and c.relkind = 'r';
            IF v_persist = 'u' THEN
              v_temp := 'UNLOGGED';
            ELSIF v_persist = 't' THEN
              v_temp := 'TEMPORARY';
            ELSE
              v_temp := '';
            END IF;
          END IF;

          -- start the create definition for regular tables unless we are in progress creating an inheritance-based child table
          IF NOT bPartition THEN
            --Issue#17 fix for case-sensitive tables
            -- SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
            -- WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = quote_ident(in_schema) AND t.table_name = quote_ident(in_table) AND t.table_type = 'BASE TABLE');
            SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
            WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = in_schema AND t.table_name = in_table AND t.table_type = 'BASE TABLE');
            IF v_cnt1 > 0 THEN
              v_table_ddl := 'CREATE ' || v_temp || ' TABLE ' || in_schema || '."' || in_table || '" (' || E'\\n';
            ELSE
              v_table_ddl := 'CREATE ' || v_temp || ' TABLE ' || in_schema || '.' || in_table || ' (' || E'\\n';
            END IF;
          END IF;
          -- RAISE NOTICE 'DEBUG2: tabledef so far: %', v_table_ddl;
          -- define all of the columns in the table unless we are in progress creating an inheritance-based child table
          IF NOT bPartition THEN
            FOR v_colrec IN
              SELECT c.column_name, c.data_type, c.udt_name, c.udt_schema, c.character_maximum_length, c.is_nullable, c.column_default, c.numeric_precision, c.numeric_scale, c.is_identity, c.identity_generation, c.is_generated, c.generation_expression
              FROM information_schema.columns c WHERE (table_schema, table_name) = (in_schema, in_table) ORDER BY ordinal_position
            LOOP
              IF bVerbose THEN RAISE NOTICE '(col loop) name=%  type=%  udt_name=%  default=%  is_generated=%  gen_expr=%', v_colrec.column_name, v_colrec.data_type, v_colrec.udt_name, v_colrec.column_default, v_colrec.is_generated, v_colrec.generation_expression; END IF;

              -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
              -- SELECT CASE WHEN pg_get_serial_sequence(v_qualified, v_colrec.column_name) IS NOT NULL THEN True ELSE False END into bSerial;
              SELECT CASE WHEN pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) IS NOT NULL THEN True ELSE False END into bSerial;
              IF bVerbose THEN
                -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
                -- SELECT pg_get_serial_sequence(v_qualified, v_colrec.column_name) into v_temp;
                SELECT pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) into v_temp;
                IF v_temp IS NULL THEN v_temp = 'NA'; END IF;
                SELECT pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name) INTO v_diag1;
                RAISE NOTICE 'DEBUG table: %  Column: %  datatype: %  Serial=%  serialval=%  coldef=%', v_qualified, v_colrec.column_name, v_colrec.data_type, bSerial, v_temp, v_diag1;
                RAISE NOTICE 'DEBUG tabledef: %', v_table_ddl;
              END IF;

              --Issue#17 put double-quotes around case-sensitive column names
              SELECT COUNT(*) INTO v_cnt1 FROM information_schema.columns t WHERE EXISTS (SELECT REGEXP_MATCHES(s.column_name, '([A-Z]+)','g') FROM information_schema.columns s
              WHERE t.table_schema=s.table_schema and t.table_name=s.table_name and t.column_name=s.column_name AND t.table_schema = quote_ident(in_schema) AND column_name = v_colrec.column_name);

              --Issue#19 put double-quotes around SQL keyword column names
              SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = v_colrec.column_name AND catcode = 'R';

              IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
                v_table_ddl := v_table_ddl || '  "' || v_colrec.column_name || '" ';
              ELSE
                v_table_ddl := v_table_ddl || '  ' || v_colrec.column_name || ' ';
              END IF;

              -- Issue#23: Handle autogenerated columns and rewrite as a simpler IF THEN ELSE branch instead of a much more complex embedded CASE STATEMENT
              IF v_colrec.is_generated = 'ALWAYS' and v_colrec.generation_expression IS NOT NULL THEN
                  -- searchable tsvector GENERATED ALWAYS AS (to_tsvector('simple'::regconfig, COALESCE(translate(email, '@.-'::citext, ' '::text), ''::text)) ) STORED
                  v_temp = v_colrec.data_type || ' GENERATED ALWAYS AS (' || v_colrec.generation_expression || ') STORED ';
              ELSEIF v_colrec.udt_name in ('geometry', 'box2d', 'box2df', 'box3d', 'geography', 'geometry_dump', 'gidx', 'spheroid', 'valid_detail') THEN
                  v_temp = v_colrec.udt_name;
              ELSEIF v_colrec.data_type = 'USER-DEFINED' THEN
                  v_temp = v_colrec.udt_schema || '.' || v_colrec.udt_name;
              ELSEIF v_colrec.data_type = 'ARRAY' THEN
                    -- Issue#6 fix: handle arrays
                  v_temp = pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name);
                  -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
                  -- WHEN pg_get_serial_sequence(v_qualified, v_colrec.column_name) IS NOT NULL
              ELSEIF pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) IS NOT NULL THEN
                  -- Issue#8 fix: handle serial. Note: NOT NULL is implied so no need to declare it explicitly
                  v_temp = pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name);
              ELSE
                  v_temp = v_colrec.data_type;
              END IF;
              -- RAISE NOTICE 'column def1=%', v_temp;

              -- handle IDENTITY columns
              IF v_colrec.is_identity = 'YES' THEN
                  IF v_colrec.identity_generation = 'ALWAYS' THEN
                      v_temp = v_temp || ' GENERATED ALWAYS AS IDENTITY';
                  ELSE
                      v_temp = v_temp || ' GENERATED BY DEFAULT AS IDENTITY';
                  END IF;
              ELSEIF v_colrec.character_maximum_length IS NOT NULL THEN
                  v_temp = v_temp || ('(' || v_colrec.character_maximum_length || ')');
              ELSEIF v_colrec.numeric_precision > 0 AND v_colrec.numeric_scale > 0 THEN
                  v_temp = v_temp || '(' || v_colrec.numeric_precision || ',' || v_colrec.numeric_scale || ')';
              END IF;

              -- Handle NULL/NOT NULL
              IF bSerial THEN
                  v_temp = v_temp || ' NOT NULL';
              ELSEIF v_colrec.is_nullable = 'NO' THEN
                  v_temp = v_temp || ' NOT NULL';
              ELSEIF v_colrec.is_nullable = 'YES' THEN
                  v_temp = v_temp || ' NULL';
              END IF;

              -- Handle defaults
              IF v_colrec.column_default IS NOT null AND NOT bSerial THEN
                  -- RAISE NOTICE 'Setting default for column, %', v_colrec.column_name;
                  v_temp = v_temp || (' DEFAULT ' || v_colrec.column_default);
              END IF;
              v_temp = v_temp || ',' || E'\\n';
              -- RAISE NOTICE 'column def2=%', v_temp;
              v_table_ddl := v_table_ddl || v_temp;
              -- RAISE NOTICE 'tabledef=%', v_table_ddl;

            END LOOP;
          END IF;
          IF bVerbose THEN RAISE NOTICE '(2)tabledef so far: %', v_table_ddl; END IF;

          -- define all the constraints: conparentid does not exist pre PGv11
          IF v_pgversion < 110000 THEN
            FOR v_constraintrec IN
              SELECT con.conname as constraint_name, con.contype as constraint_type,
                CASE
                  WHEN con.contype = 'p' THEN 1 -- primary key constraint
                  WHEN con.contype = 'u' THEN 2 -- unique constraint
                  WHEN con.contype = 'f' THEN 3 -- foreign key constraint
                  WHEN con.contype = 'c' THEN 4
                  ELSE 5
                END as type_rank,
                pg_get_constraintdef(con.oid) as constraint_definition
              FROM pg_catalog.pg_constraint con JOIN pg_catalog.pg_class rel ON rel.oid = con.conrelid JOIN pg_catalog.pg_namespace nsp ON nsp.oid = connamespace
              WHERE nsp.nspname = in_schema AND rel.relname = in_table ORDER BY type_rank
            LOOP
              v_constraint_name := v_constraintrec.constraint_name;
              v_constraint_def  := v_constraintrec.constraint_definition;
              IF v_constraintrec.type_rank = 1 THEN
                  IF pkcnt = 0 OR pktype = 'PKEY_INTERNAL' THEN
                      -- internal def
                      v_constraint_name := v_constraintrec.constraint_name;
                      v_constraint_def  := v_constraintrec.constraint_definition;
                      v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                        || 'CONSTRAINT' || ' '
                        || v_constraint_name || ' '
                        || v_constraint_def
                        || ',' || E'\\n';
                  ELSE
                    -- Issue#16 handle external PG def
                    SELECT 'ALTER TABLE ONLY ' || in_schema || '.' || c.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_pkey_def
                    FROM pg_catalog.pg_constraint r, pg_class c, pg_namespace n where r.conrelid = c.oid and  r.contype = 'p' and n.oid = r.connamespace and n.nspname = in_schema AND c.relname = in_table and r.conname = v_constraint_name;
                  END IF;
                  IF bPartition THEN
                    continue;
                  END IF;
              ELSIF v_constraintrec.type_rank = 3 THEN
                  -- handle foreign key constraints
                  --Issue#22 fix: added FKEY_NONE check
                  IF fktype = 'FKEYS_NONE' THEN
                      -- skip
                      continue;
                  ELSIF fkcnt = 0 OR fktype = 'FKEYS_INTERNAL' THEN
                      -- internal def
                      v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                        || 'CONSTRAINT' || ' '
                        || v_constraint_name || ' '
                        || v_constraint_def
                        || ',' || E'\\n';
                  ELSE
                      -- external def
                      SELECT 'ALTER TABLE ONLY ' || n.nspname || '.' || c2.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_fkey_def
                      FROM pg_constraint r, pg_class c1, pg_namespace n, pg_class c2 where r.conrelid = c1.oid and  r.contype = 'f' and n.nspname = in_schema and n.oid = r.connamespace and r.conrelid = c2.oid and c2.relname = in_table;
                      v_fkey_defs = v_fkey_defs || v_fkey_def || E'\\n';
                  END IF;
              ELSE
                  -- handle all other constraints besides PKEY and FKEYS as internal defs by default
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || v_constraint_name || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              END IF;
              if bVerbose THEN RAISE NOTICE 'DEBUG4: constraint name=% constraint_def=%', v_constraint_name,v_constraint_def; END IF;
              constraintarr := constraintarr || v_constraintrec.constraint_name:: text;

            END LOOP;
          ELSE
            -- handle PG versions 11 and up
            -- Issue#20: Fix logic for external PKEY and FKEYS
            FOR v_constraintrec IN
              SELECT con.conname as constraint_name, con.contype as constraint_type,
                CASE
                  WHEN con.contype = 'p' THEN 1 -- primary key constraint
                  WHEN con.contype = 'u' THEN 2 -- unique constraint
                  WHEN con.contype = 'f' THEN 3 -- foreign key constraint
                  WHEN con.contype = 'c' THEN 4
                  ELSE 5
                END as type_rank,
                pg_get_constraintdef(con.oid) as constraint_definition
              FROM pg_catalog.pg_constraint con JOIN pg_catalog.pg_class rel ON rel.oid = con.conrelid JOIN pg_catalog.pg_namespace nsp ON nsp.oid = connamespace
              WHERE nsp.nspname = in_schema AND rel.relname = in_table
                    --Issue#13 added this condition:
                    AND con.conparentid = 0
                    ORDER BY type_rank
            LOOP
              v_constraint_name := v_constraintrec.constraint_name;
              v_constraint_def  := v_constraintrec.constraint_definition;
              IF v_constraintrec.type_rank = 1 THEN
                  IF pkcnt = 0 OR pktype = 'PKEY_INTERNAL' THEN
                      -- internal def
                      v_constraint_name := v_constraintrec.constraint_name;
                      v_constraint_def  := v_constraintrec.constraint_definition;
                      v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                        || 'CONSTRAINT' || ' '
                        || v_constraint_name || ' '
                        || v_constraint_def
                        || ',' || E'\\n';
                  ELSE
                    -- Issue#16 handle external PG def
                    SELECT 'ALTER TABLE ONLY ' || in_schema || '.' || c.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_pkey_def
                    FROM pg_catalog.pg_constraint r, pg_class c, pg_namespace n where r.conrelid = c.oid and  r.contype = 'p' and n.oid = r.connamespace and n.nspname = in_schema AND c.relname = in_table;
                  END IF;
                  IF bPartition THEN
                    continue;
                  END IF;
              ELSIF v_constraintrec.type_rank = 3 THEN
                  -- handle foreign key constraints
                  --Issue#22 fix: added FKEY_NONE check
                  IF fktype = 'FKEYS_NONE' THEN
                      -- skip
                      continue;
                  ELSIF fkcnt = 0 OR fktype = 'FKEYS_INTERNAL' THEN
                      -- internal def
                      v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                        || 'CONSTRAINT' || ' '
                        || v_constraint_name || ' '
                        || v_constraint_def
                        || ',' || E'\\n';
                  ELSE
                      -- external def
                      SELECT 'ALTER TABLE ONLY ' || n.nspname || '.' || c2.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_fkey_def
                      FROM pg_constraint r, pg_class c1, pg_namespace n, pg_class c2 where r.conrelid = c1.oid and  r.contype = 'f' and n.nspname = in_schema and n.oid = r.connamespace and r.conrelid = c2.oid and c2.relname = in_table and
                      r.conname = v_constraint_name and r.conparentid = 0;
                      v_fkey_defs = v_fkey_defs || v_fkey_def || E'\\n';
                  END IF;
              ELSE
                  -- handle all other constraints besides PKEY and FKEYS as internal defs by default
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || v_constraint_name || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              END IF;
              if bVerbose THEN RAISE NOTICE 'DEBUG4: constraint name=% constraint_def=%', v_constraint_name,v_constraint_def; END IF;
              constraintarr := constraintarr || v_constraintrec.constraint_name:: text;

            END LOOP;
          END IF;

          -- drop the last comma before ending the create statement, which should be right before the carriage return character
          -- Issue#24: make sure the comma is there before removing it
          select substring(v_table_ddl, length(v_table_ddl) - 1, 1) INTO v_temp;
          IF v_temp = ',' THEN
              v_table_ddl = substr(v_table_ddl, 0, length(v_table_ddl) - 1) || E'\\n';
          END IF;
          IF bVerbose THEN RAISE NOTICE '(3)tabledef so far: %', trim(v_table_ddl); END IF;

          -- ---------------------------------------------------------------------------
          -- at this point we have everything up to the last table-enclosing parenthesis
          -- ---------------------------------------------------------------------------
          IF bVerbose THEN RAISE NOTICE '(4)tabledef so far: %', v_table_ddl; END IF;

          -- See if this is an inheritance-based child table and finish up the table create.
          IF bPartition and bInheritance THEN
            -- Issue#11: handle parent schema
            -- v_table_ddl := v_table_ddl || ') INHERITS (' || in_schema || '.' || v_parent || ') ' || E'\\n' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
            IF v_parent_schema = '' OR v_parent_schema IS NULL THEN v_parent_schema = in_schema; END IF;
            v_table_ddl := v_table_ddl || ') INHERITS (' || v_parent_schema || '.' || v_parent || ') ' || E'\\n' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
          END IF;

          IF v_pgversion >= 100000 AND NOT bPartition and NOT bInheritance THEN
            -- See if this is a partitioned table (pg_class.relkind = 'p') and add the partitioned key
            SELECT pg_get_partkeydef(c1.oid) as partition_key INTO v_partition_key FROM pg_class c1 JOIN pg_namespace n ON (n.oid = c1.relnamespace) LEFT JOIN pg_partitioned_table p ON (c1.oid = p.partrelid)
            WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.relkind = 'p';

            IF v_partition_key IS NOT NULL AND v_partition_key <> '' THEN
              -- add partition clause
              -- NOTE:  cannot specify default tablespace for partitioned relations
              -- v_table_ddl := v_table_ddl || ') PARTITION BY ' || v_partition_key || ' ' || v_tablespace || ';' || E'\\n';
              v_table_ddl := v_table_ddl || ') PARTITION BY ' || v_partition_key || ';' || E'\\n';
            ELSEIF v_relopts <> '' THEN
              v_table_ddl := v_table_ddl || ') ' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
            ELSE
              -- end the create definition
              v_table_ddl := v_table_ddl || ') ' || v_tablespace || ';' || E'\\n';
            END IF;
          END IF;

          IF bVerbose THEN RAISE NOTICE '(5)tabledef so far: %', v_table_ddl; END IF;

          -- Add closing paren for regular tables
          -- IF NOT bPartition THEN
          -- v_table_ddl := v_table_ddl || ') ' || v_relopts || ' ' || v_tablespace || E';\\n';
          -- END IF;
          -- RAISE NOTICE 'ddlsofar3: %', v_table_ddl;

          -- Issue#16 create the external PKEY def if indicated
          IF v_pkey_def <> '' THEN
              v_table_ddl := v_table_ddl || v_pkey_def || E'\\n';
          END IF;

          -- Issue#20
          IF v_fkey_defs <> '' THEN
                v_table_ddl := v_table_ddl || v_fkey_defs || E'\\n';
          END IF;

          IF bVerbose THEN RAISE NOTICE '(6)tabledef so far: %', v_table_ddl; END IF;

          -- create indexes
          FOR v_indexrec IN
            SELECT indexdef, COALESCE(tablespace, 'pg_default') as tablespace, indexname FROM pg_indexes WHERE (schemaname, tablename) = (in_schema, in_table)
          LOOP
            -- RAISE NOTICE 'DEBUG6: indexname=%  indexdef=%', v_indexrec.indexname, v_indexrec.indexdef;
            -- loop through constraints and skip ones already defined
            bSkip = False;
            FOREACH constraintelement IN ARRAY constraintarr
            LOOP
              IF constraintelement = v_indexrec.indexname THEN
                  -- RAISE NOTICE 'DEBUG7: skipping index, %', v_indexrec.indexname;
                  bSkip = True;
                  EXIT;
              END IF;
            END LOOP;
            if bSkip THEN CONTINUE; END IF;

            -- Add IF NOT EXISTS clause so partition index additions will not be created if declarative partition in effect and index already created on parent
            v_indexrec.indexdef := REPLACE(v_indexrec.indexdef, 'CREATE INDEX', 'CREATE INDEX IF NOT EXISTS');
            -- Fix Issue#26: do it for unique/primary key indexes as well
            v_indexrec.indexdef := REPLACE(v_indexrec.indexdef, 'CREATE UNIQUE INDEX', 'CREATE UNIQUE INDEX IF NOT EXISTS');
            -- RAISE NOTICE 'DEBUG8: adding index, %', v_indexrec.indexname;

            -- NOTE:  cannot specify default tablespace for partitioned relations
            IF v_partition_key IS NOT NULL AND v_partition_key <> '' THEN
                v_table_ddl := v_table_ddl || v_indexrec.indexdef || ';' || E'\\n';
            ELSE
                -- Issue#25: see if partial index or not
                select CASE WHEN i.indpred IS NOT NULL THEN True ELSE False END INTO v_partial
                FROM pg_index i JOIN pg_class c1 ON (i.indexrelid = c1.oid) JOIN pg_class c2 ON (i.indrelid = c2.oid)
                WHERE c1.relnamespace::regnamespace::text = in_schema AND c2.relnamespace::regnamespace::text = in_schema AND c2.relname = in_table AND c1.relname = v_indexrec.indexname;
                IF v_partial THEN
                    -- Put tablespace def before WHERE CLAUSE
                    v_temp = v_indexrec.indexdef;
                    v_pos = POSITION(' WHERE ' IN v_temp);
                    v_temp2 = SUBSTRING(v_temp, v_pos);
                    v_temp  = SUBSTRING(v_temp, 1, v_pos);
                    v_table_ddl := v_table_ddl || v_temp || ' TABLESPACE ' || v_indexrec.tablespace || v_temp2 || ';' || E'\\n';
                ELSE
                    v_table_ddl := v_table_ddl || v_indexrec.indexdef || ' TABLESPACE ' || v_indexrec.tablespace || ';' || E'\\n';
                END IF;
            END IF;

          END LOOP;
          IF bVerbose THEN RAISE NOTICE '(7)tabledef so far: %', v_table_ddl; END IF;

          -- Issue#20: added logic for table and column comments
          IF  cmtcnt > 0 THEN
              FOR v_rec IN
                SELECT c.relname, 'COMMENT ON ' || CASE WHEN c.relkind in ('r','p') AND a.attname IS NULL THEN 'TABLE ' WHEN c.relkind in ('r','p') AND a.attname IS NOT NULL THEN 'COLUMN ' WHEN c.relkind = 'f' THEN 'FOREIGN TABLE '
                      WHEN c.relkind = 'm' THEN 'MATERIALIZED VIEW ' WHEN c.relkind = 'v' THEN 'VIEW ' WHEN c.relkind = 'i' THEN 'INDEX ' WHEN c.relkind = 'S' THEN 'SEQUENCE ' ELSE 'XX' END || n.nspname || '.' ||
                      CASE WHEN c.relkind in ('r','p') AND a.attname IS NOT NULL THEN quote_ident(c.relname) || '.' || a.attname ELSE quote_ident(c.relname) END || ' IS '   || quote_literal(d.description) || ';' as ddl
                FROM pg_class c JOIN pg_namespace n ON (n.oid = c.relnamespace) LEFT JOIN pg_description d ON (c.oid = d.objoid) LEFT JOIN pg_attribute a ON (c.oid = a.attrelid AND a.attnum > 0 and a.attnum = d.objsubid)
                WHERE d.description IS NOT NULL AND n.nspname = in_schema AND c.relname = in_table ORDER BY 2 desc, ddl
              LOOP
                  --RAISE NOTICE 'comments:%', v_rec.ddl;
                  v_table_ddl = v_table_ddl || v_rec.ddl || E'\\n';
              END LOOP;
          END IF;
          IF bVerbose THEN RAISE NOTICE '(8)tabledef so far: %', v_table_ddl; END IF;

          IF trigtype = 'INCLUDE_TRIGGERS' THEN
            -- Issue#14: handle multiple triggers for a table
            FOR v_trigrec IN
                select pg_get_triggerdef(t.oid, True) || ';' as triggerdef FROM pg_trigger t, pg_class c, pg_namespace n
                WHERE n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table and c.relkind = 'r' and t.tgrelid = c.oid and NOT t.tgisinternal
            LOOP
                v_table_ddl := v_table_ddl || v_trigrec.triggerdef;
                v_table_ddl := v_table_ddl || E'\\n';
                IF bVerbose THEN RAISE NOTICE 'triggerdef = %', v_trigrec.triggerdef; END IF;
            END LOOP;
          END IF;

          IF bVerbose THEN RAISE NOTICE '(9)tabledef so far: %', v_table_ddl; END IF;
          -- add empty line
          v_table_ddl := v_table_ddl || E'\\n';
          IF bVerbose THEN RAISE NOTICE '(10)tabledef so far: %', v_table_ddl; END IF;

          -- reset search_path back to what it was
          IF search_path_old = '' THEN
            SELECT set_config('search_path', '', false) into v_temp;
          ELSE
            EXECUTE 'SET search_path = ' || search_path_old;
          END IF;

          RETURN v_table_ddl;

          EXCEPTION
          WHEN others THEN
          BEGIN
            GET STACKED DIAGNOSTICS v_diag1 = MESSAGE_TEXT, v_diag2 = PG_EXCEPTION_DETAIL, v_diag3 = PG_EXCEPTION_HINT, v_diag4 = RETURNED_SQLSTATE, v_diag5 = PG_CONTEXT, v_diag6 = PG_EXCEPTION_CONTEXT;
            -- v_ret := 'line=' || v_diag6 || '. '|| v_diag4 || '. ' || v_diag1 || ' .' || v_diag2 || ' .' || v_diag3;
            v_ret := 'line=' || v_diag6 || '. '|| v_diag4 || '. ' || v_diag1;
            RAISE EXCEPTION '%', v_ret;
            -- put additional coding here if necessarY
            RETURN '';
          END;

        END;
      $$;`,{compress:!0,removeAll:!0});var r=e.i(246230);async function i({projectRef:e,connectionString:t,id:r},i){if(!r)throw Error("id is required");let s=(({id:e})=>`
    ${n}

    with table_info as (
      select 
        n.nspname::text as schema,
        c.relname::text as name
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      where c.oid = ${e}
    )
    select pg_temp.pg_get_tabledef (
      t.schema,
      t.name,
      false,
      'FKEYS_INTERNAL',
      'INCLUDE_TRIGGERS'
    ) as definition
    from table_info t;
  `.trim())({id:r}),{result:o}=await (0,a.executeSql)({projectRef:e,connectionString:t,sql:s,queryKey:["table-definition",r]},i);return o[0].definition.trim()}e.s(["getTableDefinition",()=>i,"useTableDefinitionQuery",0,({projectRef:e,connectionString:a,id:n},{enabled:s=!0,...o}={})=>(0,t.useQuery)({queryKey:r.databaseKeys.tableDefinition(e,n),queryFn:({signal:t})=>i({projectRef:e,connectionString:a,id:n},t),enabled:s&&void 0!==e&&void 0!==n&&!isNaN(n),...o})],487164)},534517,e=>{"use strict";var t=e.i(478902),a=e.i(356003),n=e.i(616688),r=e.i(586468),i=e.i(389959);e.i(128328);var s=e.i(86086),o=e.i(19583),l=e.i(503348),c=e.i(937942),d=e.i(311827),_=e.i(938343),p=e.i(415190),E=e.i(962217),m=e.i(70756),u=e.i(804222),N=e.i(10429),b=e.i(466472);let g=e=>{if(e)return e instanceof Error?e:"object"==typeof e&&"message"in e?Error(String(e.message)):Error(String(e))};class v extends Error{cause;constructor(e,t={}){super(e,t)}}class h extends v{constructor(){super("No connection string provided for database connection."),this.name="NoConnectionStringError"}}class T extends v{constructor(e,t){super(`Failed to fetch table details from the database for table ${e}.`,{cause:g(t)}),this.name="TableDetailsFetchError"}}class I extends v{constructor(e){super(`The specified table "${e}" does not exist in the database.`),this.name="NoTableError"}}class f extends v{constructor(e){super(`There are no rows to export from the table "${e}".`),this.name="NoRowsToExportError"}}class x extends v{constructor(e,t,a){super(`The table "${e}" has ${t} rows, which exceeds the maximum allowed limit of ${a} rows for export.`),this.name="TableTooLargeError"}}class S extends v{constructor(e,t){super(`An error occurred while fetching rows from the table "${e}".`,{cause:g(t)}),this.name="FetchRowsError"}}class y extends v{constructor(e){super("Failed to convert the fetched rows into the desired output format.",{cause:g(e)}),this.name="OutputConversionError"}}class A extends v{constructor(e){super("An error occurred while creating a Blob for the exported data.",{cause:g(e)}),this.name="BlobCreationError"}}class R extends v{constructor(e){super("An error occurred while saving the exported data to a file.",{cause:g(e)}),this.name="DownloadSaveError"}}var O=e.i(355901),L=e.i(474325);let F=(0,t.jsxs)("p",{children:["Sorry! We're unable to support exporting row counts larger than"," ",5e5.toLocaleString("en-US")," at the moment. Alternatively, you may consider using ",(0,t.jsx)(c.InlineLink,{href:`${N.DOCS_URL}/reference/cli/supabase-db-dump`,children:"pg_dump"})," via our CLI instead."]}),D=async({queryClient:e,projectRef:t,connectionString:a,entity:n,bypassConfirmation:r,filters:i,sorts:l,roleImpersonationState:c,totalRows:u,startCallback:N,progressCallback:b,convertToOutputFormat:g,convertToBlob:v,save:y})=>{let A,R;if(s.IS_PLATFORM&&!a)return{status:"error",error:new h};try{A=await e.ensureQueryData({queryKey:_.tableEditorKeys.tableEditor(t,n.id),queryFn:({signal:e})=>(0,p.getTableEditor)({projectRef:t,connectionString:a,id:n.id},e)})}catch(e){return{status:"error",error:new T(n.name,e)}}if(!A)return{status:"error",error:new I(n.name)};let O=A.entity_type;if(O===d.ENTITY_TYPE.VIEW&&!r)return{status:"require_confirmation",reason:"Exporting a view may cause consistency issues or performance issues on very large views. If possible, we recommend exporting the underlying table instead."};if(O===d.ENTITY_TYPE.MATERIALIZED_VIEW&&!r)return{status:"require_confirmation",reason:"Exporting a materialized view may cause performance issues on very large views. If possible, we recommend exporting the underlying table instead."};if(O===d.ENTITY_TYPE.FOREIGN_TABLE&&!r)return{status:"require_confirmation",reason:"Exporting a foreign table may cause consistency issues or performance issues on very large tables."};if(void 0!==u){if(u>5e5)return{status:"error",error:new x(A.name,u,5e5)}}else if((0,E.isTableLike)(A)&&A.live_rows_estimate>5e5)return{status:"error",error:new x(A.name,A.live_rows_estimate,5e5)};let L=(0,o.parseSupaTable)(A);if(!L.primaryKey&&!r)return{status:"require_confirmation",reason:"This table does not have a primary key defined, which may cause performance issues when exporting very large tables."};N?.();try{R=await (0,m.fetchAllTableRows)({projectRef:t,connectionString:a,table:L,filters:i,sorts:l,roleImpersonationState:c,progressCallback:b})}catch(e){return{status:"error",error:new S(L.name,e)}}return 0===R.length?{status:"error",error:new f(n.name)}:w(C(R,L),L,{convertToOutputFormat:g,convertToBlob:v,save:y})},C=(e,t)=>e.map(e=>{let a={...e};return Object.keys(e).map(n=>{"idx"!==n||t.columns.some(e=>"idx"===e.name)?"object"==typeof e[n]&&null!==e[n]&&(a[n]=JSON.stringify(a[n])):delete a[n]}),a}),w=(e,t,a)=>{let n,r;try{n=a.convertToOutputFormat(e,t)}catch(e){return{status:"error",error:new y(e)}}try{r=a.convertToBlob(n)}catch(e){return{status:"error",error:new A(e)}}try{a.save(r,t)}catch(e){return{status:"error",error:new R(e)}}return{status:"success",rowsExported:e.length}},H=e=>{let n,r,s,o,l=(0,a.useQueryClient)(),{startProgressTracker:c,trackPercentageProgress:d,stopTrackerWithError:_,dismissTrackerSilently:p,markTrackerComplete:E}=(n=(0,i.useRef)(new Map),r=(0,i.useCallback)(({id:e,name:a,trackPercentage:r=!1})=>{n.current.has(e)||(r?n.current.set(e,(0,O.toast)((0,t.jsx)(L.SonnerProgress,{progress:0,message:`Exporting ${a}...`}),{closeButton:!1,duration:1/0})):n.current.set(e,O.toast.loading(`Exporting ${a}...`)))},[]),s=(0,i.useCallback)(({id:e,name:a,value:r,totalRows:i})=>{let s=n.current.get(e),o=Math.min(r/i*100,100),l=(0,O.toast)((0,t.jsx)(L.SonnerProgress,{progress:o,message:`Exporting ${a}...`}),{id:s,closeButton:!1,duration:1/0});s||n.current.set(e,l)},[]),o=(0,i.useCallback)((e,t,a)=>{let r=n.current.get(e);r&&(O.toast.dismiss(r),n.current.delete(e)),O.toast.error(a??`There was an error exporting ${t}`)},[]),{startProgressTracker:r,trackPercentageProgress:s,stopTrackerWithError:o,dismissTrackerSilently:(0,i.useCallback)(e=>{let t=n.current.get(e);t&&(O.toast.dismiss(t),n.current.delete(e))},[]),markTrackerComplete:(0,i.useCallback)((e,t)=>{let a=n.current.get(e),r=()=>n.current.delete(e);O.toast.success(`Successfully exported ${t} rows`,{id:a,duration:4e3,onAutoClose:r,onDismiss:r})},[])}),{convertToOutputFormat:m,convertToBlob:N,save:g}=e,[v,h]=(0,i.useState)(null),T=(0,u.useStaticEffectEvent)(async({bypassConfirmation:t})=>{if(!e.enabled)return;let{projectRef:a,connectionString:n,entity:r,totalRows:i}=e,s="provided_rows"===e.type?w(C(e.rows,e.table),e.table,{convertToOutputFormat:m,convertToBlob:N,save:g}):await D({queryClient:l,projectRef:a,connectionString:n,entity:r,bypassConfirmation:t,filters:e.filters,sorts:e.sorts,roleImpersonationState:e.roleImpersonationState,totalRows:e.totalRows,startCallback:()=>{c({id:r.id,name:r.name,trackPercentage:void 0!==i})},progressCallback:i?e=>d({id:r.id,name:r.name,totalRows:i,value:e}):void 0,convertToOutputFormat:m,convertToBlob:N,save:g});if("error"===s.status){let e=s.error;return e instanceof f?_(r.id,r.name,`The table ${r.name} has no rows to export.`):e instanceof x?_(r.id,r.name,F):(console.error("Export All Rows > Error: %s%s%s",e.message,e.cause?.message?`
${e.cause.message}`:"",e.cause?.stack?`:
${e.cause.stack}`:""),_(r.id,r.name))}if("require_confirmation"===s.status)return h(s.reason);E(r.id,s.rowsExported)});return{exportInDesiredFormat:(0,i.useCallback)(()=>T({bypassConfirmation:!1}),[T]),confirmationModal:v?(0,t.jsx)(b.ConfirmationModal,{title:"Confirm to export data",visible:!0,onCancel:()=>{e.enabled&&(p(e.entity.id),h(null))},onConfirm:()=>{T({bypassConfirmation:!0}),h(null)},alert:{base:{className:"[&>div>div>h5]:font-normal border-x-0 border-t-0 rounded-none mb-0"},title:v}}):null}};e.s(["useExportAllRowsAsCsv",0,e=>{let{exportInDesiredFormat:t,confirmationModal:a}=H({...e,convertToOutputFormat:(e,t)=>r.default.unparse(e,{columns:t.columns.map(e=>e.name)}),convertToBlob:e=>new Blob([e],{type:"text/csv;charset=utf-8;"}),save:(e,t)=>(0,n.default)(e,`${t.name}_rows.csv`)});return{exportCsv:t,confirmationModal:a}},"useExportAllRowsAsJson",0,e=>{let{exportInDesiredFormat:t,confirmationModal:a}=H({...e,convertToOutputFormat:e=>JSON.stringify(e),convertToBlob:e=>new Blob([e],{type:"application/json;charset=utf-8;"}),save:(e,t)=>(0,n.default)(e,`${t.name}_rows.json`)});return{exportJson:t,confirmationModal:a}},"useExportAllRowsAsSql",0,e=>{let{exportInDesiredFormat:t,confirmationModal:a}=H({...e,convertToOutputFormat:(e,t)=>(0,l.formatTableRowsToSQL)(t,e),convertToBlob:e=>new Blob([e],{type:"text/sql;charset=utf-8;"}),save:(e,t)=>(0,n.default)(e,`${t.name}_rows.sql`)});return{exportSql:t,confirmationModal:a}}],534517)},207831,e=>{"use strict";var t=e.i(478902),a=e.i(902858),n=e.i(532427),r=e.i(479232),i=e.i(389959),s=e.i(201844);e.i(128328);var o=e.i(158639),l=e.i(232107),c=e.i(73011),d=e.i(19583),_=e.i(892277),p=e.i(556744),E=e.i(567558),m=e.i(215312),u=e.i(513933),N=e.i(300424),b=e.i(311827),g=e.i(740413),v=e.i(954707),h=e.i(415190),T=e.i(2579),I=e.i(124416),f=e.i(983783),x=e.i(635494),S=e.i(392491),y=e.i(636047),A=e.i(837710),R=e.i(34411),O=e.i(9679),L=e.i(793912),F=e.i(135144),D=e.i(689805),C=e.i(498377),w=e.i(278889),H=e.i(657588),j=e.i(632459),k=e.i(503348),P=e.i(528462),U=e.i(937942),Y=e.i(487164),M=e.i(438824),W=e.i(941381),B=e.i(437893),$=e.i(816467),q=e.i(786741),G=e.i(53071),V=e.i(909410),K=e.i(250503),Q=e.i(471998),X=e.i(211570),z=e.i(210419),J=e.i(355901),Z=e.i(201461),ee=e.i(63519),et=e.i(587433),ea=e.i(874311),en=e.i(613580),er=e.i(792459),ei=e.i(843778),es=e.i(375761),eo=e.i(534517),el=e.i(887093);function ec(e){return e?.type===b.ENTITY_TYPE.TABLE||e?.type===b.ENTITY_TYPE.PARTITIONED_TABLE}let ed=({id:e,projectRef:a,item:n,isLocked:r,isActive:i,style:s,onExportCLI:o,apiAccessMap:l})=>{var c;let _,{data:p}=(0,x.useSelectedProjectQuery)(),E=(0,y.useTableEditorStateSnapshot)(),{selectedSchema:m}=(0,f.useQuerySchemaState)(),u=(0,ee.createTabId)(n.type,{id:n.id}),N=(0,ee.useTabsStateSnapshot)(),g=N.previewTabId===u;Object.values(N.tabsMap).some(e=>e.metadata?.tableId===n.id);let v=Number(e)===n.id,h=v&&!r,{filters:T}=(0,j.useTableFilter)(),I=(0,Z.useRoleImpersonationStateSnapshot)(),{data:S}=(0,B.useTableRowsCountQuery)({projectRef:a,connectionString:p?.connectionString,tableId:n.id,filters:T,enforceExactCount:!1,roleImpersonationState:I},{enabled:ec(n)&&v}),R=S?.count,{data:O=[]}=(0,M.useProjectLintsQuery)({projectRef:p?.ref}),L=(0,k.getEntityLintDetails)(n.name,"rls_disabled_in_public",["ERROR"],O,m).hasLint,F=(0,k.getEntityLintDetails)(n.name,"rls_enabled_no_policy",["ERROR","WARN","INFO"],O,m).hasLint,D=(0,k.getEntityLintDetails)(n.name,"security_definer_view",["ERROR","WARN"],O,m).hasLint,C=(0,k.getEntityLintDetails)(n.name,"materialized_view_in_api",["ERROR","WARN"],O,m).hasLint,w=(0,k.getEntityLintDetails)(n.name,"foreign_table_in_api",["ERROR","WARN"],O,m).hasLint,H=l?.[n.name],{exportCsv:U,confirmationModal:V}=(0,eo.useExportAllRowsAsCsv)({enabled:!0,projectRef:a,connectionString:p?.connectionString??null,entity:n,type:"fetch_all",totalRows:R}),{exportSql:et,confirmationModal:ed}=(0,eo.useExportAllRowsAsSql)({enabled:!0,projectRef:a,connectionString:p?.connectionString??null,entity:n,type:"fetch_all",totalRows:R});return(0,t.jsxs)(W.EditorTablePageLink,{title:n.name,style:s,id:String(n.id),href:(0,d.buildTableEditorUrl)({projectRef:a,tableId:n.id,schema:n.schema}),role:"button","aria-label":`View ${n.name}`,className:(0,ei.cn)((0,er.TreeViewItemVariant)({isSelected:v&&!g,isPreview:g}),"pl-4 pr-1"),onDoubleClick:e=>{e.preventDefault();let t=(0,ee.createTabId)(n.type,{id:n.id});N.makeTabPermanent(t)},children:[(0,t.jsxs)(t.Fragment,{children:[v&&(0,t.jsx)("div",{className:"absolute left-0 h-full w-0.5 bg-foreground"}),(0,t.jsxs)(en.Tooltip,{disableHoverableContent:!0,children:[(0,t.jsx)(en.TooltipTrigger,{className:"min-w-4",children:(0,t.jsx)(P.EntityTypeIcon,{type:n.type,isActive:v})}),(0,t.jsx)(en.TooltipContent,{side:"bottom",children:(c=n.type,(_=Object.entries(b.ENTITY_TYPE).find(([,e])=>e===c)?.[0]?.toLowerCase()?.split("_")?.join(" ")||"").charAt(0).toUpperCase()+_.slice(1))})]}),(0,t.jsxs)("div",{className:(0,ei.cn)("truncate overflow-hidden text-ellipsis whitespace-nowrap flex items-center gap-2 relative w-full",v&&"text-foreground"),children:[(0,t.jsx)("span",{className:(0,ei.cn)(v?"text-foreground":"text-foreground-light group-hover:text-foreground","text-sm transition truncate"),children:n.name}),(0,t.jsx)(e_,{entity:n,tableHasRlsDisabledLint:L,tableHasRlsEnabledNoPolicyLint:F,viewHasLints:D,materializedViewHasLints:C,foreignTableHasLints:w,apiAccessData:H})]}),h&&(0,t.jsxs)(ea.DropdownMenu,{children:[(0,t.jsx)(ea.DropdownMenuTrigger,{asChild:!0,className:"text-foreground-lighter transition-all text-transparent group-hover:text-foreground data-[state=open]:text-foreground",children:(0,t.jsx)(A.Button,{type:"text",className:"w-6 h-6",icon:(0,t.jsx)(Q.MoreVertical,{size:14,strokeWidth:2}),onClick:e=>e.preventDefault()})}),(0,t.jsxs)(ea.DropdownMenuContent,{side:"bottom",align:"start",className:"w-44",children:[(0,t.jsxs)(ea.DropdownMenuItem,{className:"space-x-2",onClick:e=>{e.stopPropagation(),(0,es.copyToClipboard)(n.name)},children:[(0,t.jsx)($.Copy,{size:12}),(0,t.jsx)("span",{children:"Copy name"})]},"copy-name"),ec(n)&&(0,t.jsxs)(ea.DropdownMenuItem,{className:"space-x-2",onClick:async e=>{e.stopPropagation();let t=J.toast.loading("Getting table schema..."),a=(0,Y.getTableDefinition)({id:n.id,projectRef:p?.ref,connectionString:p?.connectionString}).then(e=>{if(!e)throw Error("Failed to get table schema");return(0,el.formatSql)(e)});try{await (0,es.copyToClipboard)(a,()=>{J.toast.success("Table schema copied to clipboard",{id:t})})}catch(e){J.toast.error("Failed to copy schema: "+(e.message||e),{id:t})}},children:[(0,t.jsx)($.Copy,{size:12}),(0,t.jsx)("span",{children:"Copy table schema"})]},"copy-schema"),n.type===b.ENTITY_TYPE.TABLE&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ea.DropdownMenuSeparator,{}),(0,t.jsxs)(ea.DropdownMenuItem,{className:"space-x-2",onClick:e=>{e.stopPropagation(),E.onEditTable()},children:[(0,t.jsx)(G.Edit,{size:12}),(0,t.jsx)("span",{children:"Edit table"})]},"edit-table"),(0,t.jsxs)(ea.DropdownMenuItem,{className:"space-x-2",onClick:e=>{e.stopPropagation(),E.onDuplicateTable()},children:[(0,t.jsx)($.Copy,{size:12}),(0,t.jsx)("span",{children:"Duplicate table"})]},"duplicate-table"),(0,t.jsx)(ea.DropdownMenuItem,{className:"space-x-2",asChild:!0,children:(0,t.jsxs)(z.default,{href:`/project/${a}/auth/policies?schema=${m}&search=${n.id}`,children:[(0,t.jsx)(K.Lock,{size:12}),(0,t.jsx)("span",{children:"View policies"})]},"view-policies")},"view-policies"),(0,t.jsxs)(ea.DropdownMenuSub,{children:[(0,t.jsxs)(ea.DropdownMenuSubTrigger,{className:"gap-x-2",children:[(0,t.jsx)(q.Download,{size:12}),"Export data"]}),(0,t.jsxs)(ea.DropdownMenuSubContent,{children:[(0,t.jsx)(ea.DropdownMenuItem,{className:"space-x-2",onClick:e=>{e.stopPropagation(),U()},children:(0,t.jsx)("span",{children:"Export table as CSV"})},"download-table-csv"),(0,t.jsx)(ea.DropdownMenuItem,{className:"gap-x-2",onClick:e=>{e.stopPropagation(),et()},children:(0,t.jsx)("span",{children:"Export table as SQL"})},"download-table-sql"),(0,t.jsx)(ea.DropdownMenuItem,{className:"gap-x-2",onClick:e=>{e.stopPropagation(),o()},children:(0,t.jsx)("span",{children:"Export table via CLI"})},"download-table-cli")]})]}),(0,t.jsx)(ea.DropdownMenuSeparator,{}),(0,t.jsxs)(ea.DropdownMenuItem,{className:"gap-x-2",onClick:e=>{e.stopPropagation(),E.onDeleteTable()},children:[(0,t.jsx)(X.Trash,{size:12}),(0,t.jsx)("span",{children:"Delete table"})]},"delete-table")]})]})]})]}),V,ed]})},e_=({entity:e,tableHasRlsDisabledLint:a,tableHasRlsEnabledNoPolicyLint:n,viewHasLints:r,materializedViewHasLints:i,foreignTableHasLints:s,apiAccessData:l})=>{let{ref:c}=(0,o.useParams)(),d=(0,H.useFlag)("dataApiExposedBadge"),_=null,p="Data is publicly accessible via API",E=(0,t.jsx)(U.InlineLink,{href:`/project/${c}/editor/${e.id}?schema=${e.schema}&showWarning=true`,children:"Learn more"});switch(e.type){case b.ENTITY_TYPE.TABLE:a&&(_=(0,t.jsxs)(t.Fragment,{children:["This table can be accessed by anyone via the Data API as RLS is disabled. ",E,"."]}));break;case b.ENTITY_TYPE.VIEW:r&&(_=(0,t.jsxs)(t.Fragment,{children:[p," as this is a Security definer view. ",E,"."]}));break;case b.ENTITY_TYPE.MATERIALIZED_VIEW:i&&(_=(0,t.jsxs)(t.Fragment,{children:[p," as this is a Security definer view ",E,"."]}));break;case b.ENTITY_TYPE.FOREIGN_TABLE:s&&(_=(0,t.jsxs)(t.Fragment,{children:[p," as RLS is not enforced on foreign tables. ",E,"."]}))}if(_)return(0,t.jsxs)(en.Tooltip,{children:[(0,t.jsx)(en.TooltipTrigger,{className:"min-w-4",children:(0,t.jsx)(et.Badge,{variant:"destructive",children:"Unrestricted"})}),(0,t.jsx)(en.TooltipContent,{side:"right",className:"max-w-52",children:_})]});let m=e.type===b.ENTITY_TYPE.TABLE&&l?.apiAccessType==="access"&&n;if(d&&m)return(0,t.jsxs)(en.Tooltip,{children:[(0,t.jsx)(en.TooltipTrigger,{className:"min-w-4","aria-label":"Table exposed via Data API",children:(0,t.jsx)(V.Globe,{size:14,strokeWidth:1,className:"text-foreground-lighter"})}),(0,t.jsx)(en.TooltipContent,{side:"right",className:"max-w-52",children:"This table can be accessed via the Data API but no RLS policies exist so no data will be returned"})]});let u=l?.apiAccessType==="access"&&!n;return d&&u?(0,t.jsxs)(en.Tooltip,{children:[(0,t.jsx)(en.TooltipTrigger,{className:"min-w-4","aria-label":"Table exposed via Data API",children:(0,t.jsx)(V.Globe,{size:14,strokeWidth:1,className:"text-foreground-lighter"})}),(0,t.jsx)(en.TooltipContent,{side:"right",children:"This table can be accessed via the Data API"})]}):null};var ep=e.i(384706);let eE=()=>(0,t.jsx)(C.InnerSideBarEmptyPanel,{title:"No tables or views",description:"Any tables or views you create will be listed here.",className:"mx-4",children:(0,t.jsx)("div",{className:"top-0 left-6 flex flex-col opacity-50 cursor-not-allowed bg-dash-sidebar h-content -mb-7 pointer-events-none scale-75",children:(0,t.jsxs)("div",{className:"relative h-content",children:[(0,t.jsxs)("div",{className:"absolute inset-0 pointer-events-none z-10",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-transparent from-80% to-100% to-background-surface-100 dark:to-background-surface-75"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent from-50% to-100% to-background-surface-100 dark:to-background-surface-75"})]}),(0,t.jsx)("div",{className:"absolute left-[150px] bottom-[21px] text-foreground-muted z-10 pointer-events-none",children:(0,t.jsx)(ep.Pointer,{size:16,className:"text-foreground-light",strokeWidth:1.5})}),[void 0,void 0,void 0,void 0].map((e,a)=>(0,t.jsx)("div",{className:"border-l pointer-events-none",children:(0,t.jsxs)("div",{className:(0,ei.cn)("group",(0,er.TreeViewItemVariant)({isSelected:2===a,isOpened:2===a,isPreview:!1}),"px-4 min-w-40"),"aria-selected":2===a,children:[2===a&&(0,t.jsx)("div",{className:"absolute left-0 h-full w-0.5 bg-foreground"}),(0,t.jsx)(P.EntityTypeIcon,{type:"r"}),`postgres_table_${a}`]})},`some-${a}`))]})})});e.s(["TableEditorMenu",0,()=>{let{id:e,ref:H}=(0,o.useParams)(),j=e?Number(e):void 0,k=(0,y.useTableEditorStateSnapshot)(),{selectedSchema:P,setSelectedSchema:U}=(0,f.useQuerySchemaState)(),Y=(0,l.useBreakpoint)(),[M,W]=(0,i.useState)(""),[B,$]=(0,i.useState)(),[q,G]=(0,i.useState)(Object.values(b.ENTITY_TYPE)),[V,K]=(0,I.useLocalStorage)("table-editor-sort","alphabetical"),{data:Q}=(0,x.useSelectedProjectQuery)(),{data:X,isLoading:z,isSuccess:J,isError:Z,error:ee,hasNextPage:et,isFetchingNextPage:ea,fetchNextPage:en}=(0,g.useEntityTypesQuery)({projectRef:Q?.ref,connectionString:Q?.connectionString,schemas:[P],search:M.trim()||void 0,sort:V,filterTypes:q},{placeholderData:M?s.keepPreviousData:void 0}),er=(0,i.useMemo)(()=>X?.pages.flatMap(e=>e.data.entities),[X?.pages]),ei=(0,i.useMemo)(()=>er?.map(e=>e.name)??[],[er]),{data:es}=(0,v.useTableApiAccessQuery)({projectRef:Q?.ref,connectionString:Q?.connectionString??void 0,schemaName:P,tableNames:ei},{enabled:!!(P&&ei.length>0)}),{can:eo}=(0,T.useAsyncCheckPermissions)(a.PermissionAction.TENANT_SQL_ADMIN_WRITE,"tables"),{isSchemaLocked:el}=(0,S.useIsProtectedSchema)({schema:P}),{data:ec}=(0,h.useTableEditorQuery)({projectRef:Q?.ref,connectionString:Q?.connectionString,id:j});ec?.schema&&!P&&U(ec.schema);let e_=(0,w.useTableEditorTabsCleanUp)(),ep=(0,i.useCallback)(async e=>{let t=await (0,h.getTableEditor)({id:e,projectRef:H,connectionString:Q?.connectionString});$(t&&(0,d.parseSupaTable)(t))},[Q?.connectionString,H]),em=(0,i.useCallback)(e=>{let t=er?.[e];return t?.id?String(t.id):`table-editor-entity-${e}`},[er]),eu=(0,i.useMemo)(()=>({projectRef:Q?.ref,id:Number(j),isLocked:el,onExportCLI:()=>ep(Number(j)),apiAccessMap:es}),[Q?.ref,j,el,ep,es]);return(0,i.useEffect)(()=>{er&&!M&&e_({schemas:[P],entities:er})},[er,M,P,e_]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex flex-col flex-grow gap-5 pt-5 h-full",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-y-1.5",children:[(0,t.jsx)(N.default,{className:"mx-4",selectedSchemaName:P,onSelectSchema:e=>{W(""),U(e)},onSelectCreateSchema:()=>k.onAddSchema()}),(0,t.jsx)("div",{className:"grid gap-3 mx-4",children:el?(0,t.jsx)(_.ProtectedSchemaWarning,{size:"sm",schema:P,entity:"table"}):(0,t.jsx)(m.ButtonTooltip,{block:!0,title:"Create a new table",name:"New table",disabled:!eo,size:"tiny",icon:(0,t.jsx)(r.Plus,{size:14,strokeWidth:1.5,className:"text-foreground-muted"}),type:"default",className:"justify-start",onClick:()=>k.onAddTable(),tooltip:{content:{side:"bottom",text:eo?void 0:"You need additional permissions to create tables"}},children:"New table"})})]}),(0,t.jsxs)("div",{className:"grow min-h-0 flex flex-col gap-2 pb-4",children:[(0,t.jsxs)(C.InnerSideBarFilters,{className:"mx-2",children:[(0,t.jsx)(C.InnerSideBarFilterSearchInput,{autoFocus:!Y,name:"search-tables",value:M,placeholder:"Search tables...","aria-labelledby":"Search tables",onChange:e=>W(e.target.value),children:(0,t.jsxs)(C.InnerSideBarFilterSortDropdown,{value:V,onValueChange:e=>K(e),children:[(0,t.jsx)(C.InnerSideBarFilterSortDropdownItem,{value:"alphabetical",className:"flex gap-2",children:"Alphabetical"},"alphabetical"),(0,t.jsx)(C.InnerSideBarFilterSortDropdownItem,{value:"grouped-alphabetical",children:"Entity Type"},"grouped-alphabetical")]})}),(0,t.jsxs)(D.Popover_Shadcn_,{children:[(0,t.jsx)(F.PopoverTrigger_Shadcn_,{asChild:!0,children:(0,t.jsx)(A.Button,{type:5!==q.length?"default":"dashed",className:"h-[32px] md:h-[28px] px-1.5",icon:(0,t.jsx)(n.Filter,{})})}),(0,t.jsx)(L.PopoverContent_Shadcn_,{className:"p-0 w-56",side:"bottom",align:"center",children:(0,t.jsxs)("div",{className:"px-3 pt-3 pb-2 flex flex-col gap-y-2",children:[(0,t.jsx)("p",{className:"text-xs",children:"Show entity types"}),(0,t.jsx)("div",{className:"flex flex-col",children:Object.entries(b.ENTITY_TYPE).map(([e,a])=>(0,t.jsxs)("div",{className:"group flex items-center justify-between py-0.5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,t.jsx)(R.Checkbox_Shadcn_,{id:e,name:e,checked:q.includes(a),onCheckedChange:()=>{q.includes(a)?G(q.filter(e=>e!==a)):G(q.concat([a]))}}),(0,t.jsx)(O.Label_Shadcn_,{htmlFor:e,className:"capitalize text-xs",children:e.toLowerCase().replace("_"," ")})]}),(0,t.jsx)(A.Button,{size:"tiny",type:"default",onClick:()=>G([a]),className:"transition opacity-0 group-hover:opacity-100 h-auto px-1 py-0.5",children:"Select only"})]},e))})]})})]})]}),z&&(0,t.jsx)(p.default,{}),Z&&(0,t.jsx)("div",{className:"mx-4",children:(0,t.jsx)(E.default,{error:ee??null,subject:"Failed to retrieve tables"})}),J&&(0,t.jsxs)(t.Fragment,{children:[0===M.length&&(er?.length??0)<=0&&(0,t.jsx)(eE,{}),M.length>0&&(er?.length??0)<=0&&(0,t.jsx)(C.InnerSideBarEmptyPanel,{className:"mx-2",title:"No results found",description:`Your search for "${M}" did not return any results`}),(er?.length??0)>0&&(0,t.jsx)("div",{className:"flex flex-1 min-h-0 w-full","data-testid":"tables-list",children:(0,t.jsx)(u.InfiniteListDefault,{className:"h-full w-full",items:er,ItemComponent:ed,LoaderComponent:u.LoaderForIconMenuItems,itemProps:eu,getItemKey:em,getItemSize:e=>0!==e&&e===er.length?85:28,hasNextPage:et,isLoadingNextPage:ea,onLoadNextPage:en})})]})]})]}),(0,t.jsx)(c.ExportDialog,{ignoreRoleImpersonation:!0,table:B,open:!!B,onOpenChange:e=>{e||$(void 0)}})]})}],207831)}]);

//# debugId=34dec730-0733-587a-e8a3-40779337ddb9
//# sourceMappingURL=5c724b60d3aa316f.js.map